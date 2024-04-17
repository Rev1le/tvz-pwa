<script setup>
import { ref, computed } from 'vue';

const $props = defineProps({
  value: Array,
  hasImageNumber: Boolean
})

const currentImageIndex = ref(0);

const countImages = computed(() => {
  return $props.value.length;
});

function changeImage(swipeState) {
  if (swipeState === 'right') {
    currentImageIndex.value += 1;

    if (currentImageIndex.value > (countImages.value - 1)) {
      currentImageIndex.value = 0;
    }

  } else if (swipeState === 'left') {
    currentImageIndex.value -= 1;

    if (currentImageIndex.value < 0) {
      currentImageIndex.value = countImages.value -1;
    }
  }
}
</script>

<template>
  <div class="image-slider" v-show="!!value.length">
    <div v-if="hasImageNumber" class="image-slider__image-number">
      {{ currentImageIndex+1 }} / {{ countImages }}
    </div>
    <img class="image-slider__image" :src="value[currentImageIndex]">
    <div class="image-slider__pagination-btns">
      <button class="link-btn" @click="changeImage('left')"><-</button>
      <button class="link-btn" @click="changeImage('right')">-></button>
    </div>
  </div>
</template>

<style>
.image-slider {
  position: relative;
}

.image-slider__image-number {
  position: absolute;
  background-color: white;
  padding: 4px;
}

.image-slider__image {
  width: auto;
  height : auto;
  max-height: 100%;
  max-width: 100%;
}

.image-slider__pagination-btns {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 5px 0px;
}
</style>