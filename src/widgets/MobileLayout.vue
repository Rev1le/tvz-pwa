<script setup lang="ts">
import AppStatusIcon from '@/features/AppStatusIcon.vue';
// import TButton from '../shared/ui-kit/Button.vue';

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
    <div class="mobile-layout__filters">
      <slot name="filters"></slot>
    </div>
    
    <div class="mobile-layout__page-content">
      <slot name="content"></slot>

      <!-- <t-button :disabled="false">ffafaf</t-button> -->
    </div>

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
  & header {
    padding: 10px;
    padding-bottom: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;

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

  &__filters {
    padding: 10px 15px;
    display: flex;
    gap: 8px;
    flex-direction: column;
  }

  &__page-content {
    flex: 1;

    padding: 10px;
    border-radius: 0px;
    background-color: #F0F2F8;
    // background-color: #F0F2F8; //#D9E0F5;
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