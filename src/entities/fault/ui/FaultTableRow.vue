<script setup>
import { ref, inject, computed, onMounted, watch, reactive } from 'vue';
import ImageSlider from '@/shared/ui/image-slider/ImageSlider.vue';

import SvgIcon from '@/shared/ui/icon/SvgIcon.vue';

import { STORE_NAME as DB_STORE_NAME, getStoreTransaction, useFaultStore } from "@/entities/fault";
import { saveImage, getDbImagesUrlList, retrieveFaultImages } from "../model";
import ModalDialog from  '@/shared/ui/modal/ModalDialog.vue';


const dbPromise = inject('dbPromise');
const faultStore = useFaultStore();
const $props = defineProps({
  value: Object
})


const dbImages = ref([]);
const activeImg = ref(null);
const activeModal = ref(false);

/**
 * Выгружаем фотографии из localStorage
 */
faultStore.receiveFaultsImages();

onMounted(async ()=> {
  const db = await dbPromise
  const faultId = $props.value.id;
  dbImages.value = await getDbImagesUrlList(faultId, db);
})


function prepareImageUrl(image) {
  return image
}

async function saveImg(event) {
  const file = event.target.files[0];
  const faultId = $props.value.id;
  await saveImage(faultId, file, dbPromise);
  dbImages.value = await getDbImagesUrlList(faultId, await dbPromise);
}

async function clearIndexedDB() {
  const db = await dbPromise;
  const store = getStoreTransaction(db, 'readwrite');
  store.clear();
}

async function uploadImages() {
  const db = await dbPromise;
  const faultId = $props.value.id;
  const images = faultStore.images[faultId] ?? [];
  const values = await retrieveFaultImages(images, db)

  let files = [];

  for (const imageId in values) {
    const value = values[imageId];

    if (!value) {
      continue;
    }

    let file = new File([value.data], value.name, {type: value.type});
    files.push(file);
    const store = getStoreTransaction(db, 'readwrite');
    await store.delete(Number(imageId))
    faultStore.deleteImageId(faultId, Number(imageId));
  }

  console.log('Файлу отправялет на сервер: ', files);
  dbImages.value = await getDbImagesUrlList(faultId, await dbPromise);
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
    <tr class="table-subrow">
      <input @change="saveImg" type="file" accept="image/*" capture="camera">
    </tr>
    <tr class="table-subrow fault-tr__images-list">
      <ImageSlider has-image-number :value="dbImages" />
    </tr>
    <td class="table-cell"></td>
    <td class="table-cell">
      <span
        class="fault-tr__close-btn link-btn is-danger"
        @click="activeModal = !activeModal"
      >
        <span>Закрыть</span>
        <SvgIcon class="close-btn-svg" name="cross" />
      </span>
    </td>
  </tr>
  <ModalDialog v-model="activeModal">
    <button
      style="margin: auto;"
      class="is-primary link-btn"
      @click="uploadImages"
    >
      Выгрузить фотографии в облако?
    </button>
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

.fault-tr > .table-subrow{
  text-align: center;

}

td:has(.fault-tr__close-btn) {
  width: 50%;
}

span.fault-tr__close-btn.link-btn {

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0px 8px 0px auto;
}

.fault-tr__close-btn span {
  line-height: 18px;
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