<script setup>
import { ref, watch } from 'vue';

const modalDialog = ref(null);
const model = defineModel()

function closeModal() {
  modalDialog.value.classList.remove('hide');
  modalDialog.value.close();
  modalDialog.value.removeEventListener(
    'webkitAnimationEnd',
    closeModal,
    false
  )
};

watch(model, (newValue) => {
  if (newValue) {
    modalDialog.value.showModal()
    return;
  }

  modalDialog.value.classList.add("hide");
  modalDialog.value.addEventListener(
    'webkitAnimationEnd',
    closeModal,
    false
  );
});
</script>

<template>
  <dialog ref="modalDialog" class="modal">
    <button @click="model = false" class="modal__close-btn">
      X
    </button>
    <div class="modal__content">
      <slot></slot>
    </div>
  </dialog>
</template>

<style lang="scss">

$button-side-size: 2rem;
$content-padding: 8px;

.modal {
  border-width: 0;
  background-color: white;
  
  padding: $content-padding;
  box-shadow:
    0 .7px 1.4px rgba(0,0,0,.07),
    0 1.9px 4px rgba(0,0,0,.05),
    0 4.5px 10px rgba(0,0,0,.05);
  border-radius: 4px;

  margin: auto;
  height: 95vh;
  width: 90vw;

  padding: 0;
  padding-top: 8px;
}

.modal__content {
  background-color: var(--theme-background);
  // background-color: white;
  padding: 0;
  padding-top: 8px;
  height: calc(100% - (8px + 32px));
  // height: 100%;
}

.modal:focus-visible {
  outline: none;
}

.modal__close-btn {
  width: $button-side-size;
  height: $button-side-size;

  position: absolute;
  right: 8px;

  border: none;

  background-color: white;
  box-shadow:
    0 .7px 1.4px rgba(0,0,0,.07),
    0 1.9px 4px rgba(0,0,0,.05),
    0 4.5px 10px rgba(0,0,0,.05);
  color: var(--theme-primary);
  font-weight: 600;
  font-size: 20px;
}

.modal__content {
  margin-top: calc($button-side-size + $content-padding);
}


.modal::backdrop {
  width: 100vw;
  height: 100vh;
}

.modal[open] {
  animation: scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
}

.modal[open]::backdrop {
  animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
}

.modal.hide {
  animation: scaleDown .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
}

.modal.hide::backdrop {
  animation: fadeOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
}

@keyframes scaleUp {
  0% {
    transform:scale(.8) translateY(1000px);
    opacity:0;
  }
  100% {
    transform:scale(1) translateY(0px);
    opacity:1;
  }
}

@keyframes scaleDown {
  0% {
    transform:scale(1) translateY(0px);
    opacity:1;
  }
  100% {
    transform:scale(.8) translateY(1000px);
    opacity:0;
  }
}

@keyframes fadeIn {
  0% {
    background:rgba(0,0,0,.0);
  }
  100% {
    background:rgba(0,0,0,.7);
  }
}

@keyframes fadeOut {
  0% {
    background:rgba(0,0,0,.7);
  }
  100% {
    background:rgba(0,0,0,.0);
  }
}
</style>
