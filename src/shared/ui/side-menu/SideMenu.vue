<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isNavOpen = ref(false);

// Закрытие SideMenu, при мене страницы
watch(route, () => {
  isNavOpen.value = false;
})
</script>

<template>
  <button
    class="burger-menu-btn"
    @click.prevent="isNavOpen = !isNavOpen"
  >
    <div class="burger-menu-btn__line"></div>
    <div class="burger-menu-btn__line"></div>
    <div class="burger-menu-btn__line"></div>
  </button>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="isNavOpen = false"
      v-if="isNavOpen"
    ></div>
    <transition name="slide">
      <div v-if="isNavOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style>
.burger-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 4px;
  height: 40px;
  width: 40px;

  background-color: white;
  box-shadow: 0px 2px 4px var(--theme-shadow);
  border-width: 0;
}

.burger-menu-btn__line {
  width: 20px;
  height: 2px;

  background-color: #296cee;
  border-radius: 0px;
}

.sidebar {
  z-index: 10;
}

.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: var(--theme-placeholder);
  opacity: 40%;
}

.sidebar-panel {
  position: fixed;
  left: 0;
  top: 0;

  height: 100vh;
  width: 75%;

  overflow-y: auto;
  
  background-color: white;
  box-shadow: 0px 2px 4px var(--theme-shadow);
}

/* Анимация SideMenu */
.slide-enter-active,
.slide-leave-active
{
  transition: transform 0.2s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s
}
</style>