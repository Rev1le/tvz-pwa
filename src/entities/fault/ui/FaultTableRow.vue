<script setup>
import { storeToRefs } from 'pinia';
import { ref, inject, computed, onMounted, watch, reactive } from 'vue';
import { axiosInstance } from "@/shared/api";
import ImageSlider from '@/shared/ui/image-slider/ImageSlider.vue';

import { openDB } from 'idb';
import { prepareFileForDb } from "@/shared/lib/db";

import { STORE_NAME as DB_STORE_NAME, getStoreTransaction, useFaultStore } from "@/entities/fault";

import ModalDialog from  '@/shared/ui/modal/ModalDialog.vue';

const dbPromise = inject('dbPromise');

const activeImg = ref(null);

const $props = defineProps({
  value: Object
})

const faultStore = useFaultStore();
const { faultImages, dbImagesUrlList } = storeToRefs(faultStore);



function prepareImageUrl(image) {
  return image
  // let reqParams = new URLSearchParams();
  // reqParams.append('ownerName', image.owner_name);
  // reqParams.append('ownerAttribute',image.owner_field);
  // reqParams.append('ownerId', image.owner_id);
  // reqParams.append('attachmentId', image.id);
  // reqParams.append('download', 1);

  // axiosInstance.get(`/main/pwa/download/?${reqParams}`).then(r => console.log(r))

  // return `/main/pwa/download/?${reqParams}`;


  return '';

  // 'ownerName'      => $this->owner_name,
  //           'ownerAttribute' => $this->owner_field,
  //           'ownerId'        => $this->owner_id,
  //           'attachmentId'   => $this->id,
  //           'download'       => 1,
}


const dbImages = ref([]);

watch(
  reactive($props.value),
  (newValue) => {
    dbImages.value = [...dbImages.value, ...newValue.images];
    console.log(newValue);
  },
  { immediate: true }
);


onMounted(async () => {
  const db = await dbPromise;
  const dbImagesUrlList2 = await faultStore.dbImagesUrlList($props.value.id, db);

  dbImages.value = [...dbImages.value, ...dbImagesUrlList2];
})


async function saveImg(event) {
  const file = await prepareFileForDb(event.target.files[0]);
  console.log(file);
  const db = await dbPromise;

  const store = getStoreTransaction(db, 'readwrite');
  const result = await store.add(file);

  faultStore.setFaultDbImage($props.value.id, result);

  const dbImagesUrlList2 = await faultStore.dbImagesUrlList($props.value.id, db);
  dbImages.value = dbImagesUrlList2;

  return;



  // const file = await prepareFileForDb(event.target.files[0]);
  // // console.log(file);
  // // // console.log(file);

  // // // const arrayBuffer = await file.arrayBuffer()
  // // // const blob = new Blob([new Uint8Array(arrayBuffer)], {type: file.type });
  // // // console.log(blob);
  // // // // const bytes = Array.from(event.target.files);
  // // // (await dbPromise).put('fault-images', blob, '1');

  // const db = await dbPromise;
  // console.log(db);
  
  // const storeName = 'fault-images';

  // // const store = db.transaction(storeName, 'readwrite').objectStore(storeName);
  // // console.log(store);

  // // store.add(file, '1');


  // const imgValue = await db.transaction(storeName, 'readonly').objectStore(storeName).get('1');

  // console.log(imgValue);

  // const imageBlog = new Blob([imgValue.data]);
  // const src = URL.createObjectURL(imageBlog);
  // const image = document.createElement('img');
	// image.src = src;
  // console.log(src);

  // activeImg.value = src;

  // cur.o

  // cur.onsuccess = (event) => {
	// 	const cursor = event.target.result;
  //   console.log(cursor)
	// 	if (cursor) {
  //     const imgValue = cursor.value;

  //     const imageBlog = new Blob([imgValue.data]);
  //     const src = URL.createObjectURL(imageBlog);

  //     const image = document.createElement('img');
	//     image.src = src;
  //     console.log(src);

	// 		// renderGalleryColumn(cursor);
	// 		cursor.continue();
	// 	}
	// };

  // const store = db.transaction(storeName, 'readwrite').objectStore(storeName);
	// store.add(file);
}

async function loadImg() {
  const file = await prepareFileForDb(event.target.files[0]);

  const db = await dbPromise;

  const store = getStoreTransaction(db);
}

const activeModal = ref(false);

const modalWindow = ref(null);

const allImages = ref([]);

async function clearIndexedDB() {
  const db = await dbPromise;
  const store = getStoreTransaction(db, 'readwrite');
  console.log('rerere')
  store.clear();
}

function closeFault() {
  activeModal.value = !activeModal.value;
}

async function uploadImages() {
  const db = await dbPromise;
  const store = getStoreTransaction(db, 'readwrite');
  faultStore.receiveImages();
  const images = faultStore.images[$props.value.id];
  for (const image of images) {
    const dbImage = await store.get(image)
    console.log(dbImage);
    console.log('d', await store.delete(image));
  }
  // console.log(images);
}

</script>

<template>
  <tr class="fault-tr">
    <th>
    <img :src="activeImg" alt="222">
      <span>{{ value.carName }}</span>
    </th>
    <td class="table-cell">
      <span class="table-cell__name">Марка</span>
      <span class="table-cell__value">{{ value.mainDevice.brand }}</span>
    </td>
    <td class="table-cell">
      <span class="table-cell__name">Серийный номер</span>
      <span class="table-cell__value">{{ value.mainDevice.serial_number }}</span>
    </td>
    <td class="table-cell">
      <span class="table-cell__name">Id терминала</span>
      <span class="table-cell__value">{{ value.mainDevice.terminal_id }}</span>
    </td>
    <tr class="table-subrow" style="text-align: center;">
      <input @change="saveImg" type="file" accept="image/*" capture="camera">
    </tr>
    <tr class="table-subrow" style="text-align: center;">
      <img alt="indexedDB">
    </tr>
    <tr class="table-subrow" style="text-align: center;">
      <button @click="clearIndexedDB"> Очистить IndexedDB</button>
    </tr>
    <tr class="table-subrow fault-tr__images-list">
      <ImageSlider :value="dbImages" />
    </tr>
    <td class="table-cell"></td>
    <td class="table-cell">
      <span @click="closeFault" class="link-btn fault-tr__close-btn is-danger">EXIT</span>
    </td>
  </tr>
  <ModalDialog v-model="activeModal">
    <button @click="uploadImages">Выгрузить фотографии в облако?</button>
  </ModalDialog>
</template>

<style>
.fault-tr {
  margin-top: 8px;
  font-weight: 400;
  
  background-color: white;
  padding: 8px;
  box-shadow:
    0 .7px 1.4px rgba(0,0,0,.07),
    0 1.9px 4px rgba(0,0,0,.05),
    0 4.5px 10px rgba(0,0,0,.05);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;

  & th {
    font-weight: inherit;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    border: none;
    text-align: left;
    padding: 8px;
  }
}

.fault-tr__close-btn {
  width: 15px;
  height: 10px;
  margin: 0px 8px 0px auto;
}

.fault-tr__image {
  max-height: 50px;
}

.fault-tr__images-list {
  
  /* display: flex;
  overflow: scroll;
  justify-content: center; */
  /* flex-wrap: wrap; */
}
</style>