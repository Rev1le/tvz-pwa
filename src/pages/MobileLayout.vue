<script setup lang="ts">
import AppStatusIcon from '@/features/AppStatusIcon.vue';

</script>

<template>
<div class="mobile-layout">
  <header class="mobile-layout__header">
    <div class="mobile-layout__hamburger-menu">
      <div class="menu-line"></div>
      <div class="menu-line"></div>
      <div class="menu-line"></div>
    </div>
    <h1>Заявки</h1>
    <div class="mobile-layout__app-status">
      <app-status-icon />
      Online
    </div>
  </header>
  <main>
    <slot name="content"></slot>

  </main>
  <footer>

  </footer>
</div>
</template>

<style lang="scss">
.mobile-layout {
  height: 100%;
  width: 100%;


  
  display: flex;
  flex-direction: column;
  // gap: 20px;
  & header {
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & main {
    padding: 10px 20px;

  }

  & footer {

  }

  &__hamburger-menu {
    height: 40px;
    width: 40px;

    background-blend-mode: normal;
    box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
  }

  &__app-status {
    padding: 8px;
    background-color: #F0F2F8;
    height: 36px;
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 8px;

    font-weight: 500;
  }
}

h1 {
  // height: 38px;
  // font-size: 30px;
  // font-weight: bo;
  line-height: 36px;
}

.menu-line {
  width: 20px;
  height: 2px;
  background-color: #296cee;
  border-radius: 0px;

  // border: 1px solid #296cee;
}
</style>