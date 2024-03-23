<script setup>
import { ref } from 'vue';
import { axiosInstance } from "@/shared/api";

const $props = defineProps({
  fault: Object
})

function openCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {  
    console.log("enumerated devices not supported");  
    return; 
  } 

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      console.log(stream)
      // video.srcObject = stream;
      // video.play();
    })
    .catch((err) => {
      console.error(`An error occurred: ${err}`);
    });
}

async function prepareImageUrl(image) {
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

</script>

<template>
  <tr class="fault-tr">
    <th>
      <span>{{ fault.carName }}</span>
    </th>
    <td class="table-cell">
      <span class="table-cell__name">Марка</span>
      <span class="table-cell__value">{{ fault.mainDevice.brand }}</span>
    </td>
    <td class="table-cell">
      <span class="table-cell__name">Серийный номер</span>
      <span class="table-cell__value">{{ fault.mainDevice.serial_number }}</span>
    </td>
    <td class="table-cell">
      <span class="table-cell__name">Id терминала</span>
      <span class="table-cell__value">{{ fault.mainDevice.terminal_id }}</span>
    </td>
    <tr class="table-subrow" style="text-align: center;">
      <span class="link-btn" @click="openCamera">CAMERA</span>
    </tr>
    <tr class="table-subrow" style="text-align: center;">
      <!-- {{ fault.images }} -->
      <img :src="prepareImageUrl(image)" v-for="image in fault.images">
    </tr>
    <td class="table-cell"></td>
    <td class="table-cell">
      <span class="link-btn fault-tr__close-btn is-danger">EXIT</span>
    </td>
  </tr>
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
</style>