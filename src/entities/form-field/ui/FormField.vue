<script setup lang="ts">
const $props = defineProps({
  placholder: {
    type: String,
    default: 'Выберите занечние фильтра'
  },
  isLoading: {
    type: Boolean,
    default: true
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="form-field">
    <input class="form-field__input" :placeholder="$props.placholder" :disabled="isDisabled">
    <div v-show="isLoading" class="form-field__loading-icon"></div>
  </div>
</template>

<style>
.form-field__input {
  display: block;
}

.form-field {
  position: relative;
  max-width: 400px;
}

.form-field__loading-icon {

	animation: 0.6s linear 0s infinite normal none running loading;

	flex-shrink: 0;
	display: inline-block;
	border-radius: 50%;
	border-style: solid;
	border-color: rgb(211, 218, 230);
	border-image: none;
	border-block-color: rgb(0, 119, 204) rgb(211, 218, 230);
	border-inline-color: rgb(211, 218, 230);
	inline-size: 16px;
	block-size: 16px;
	border-width: 1.5px;

  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  margin-top: auto; 
  margin-bottom: auto; 

	pointer-events: none;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>