<script setup lang="ts">
import { computed, inject } from 'vue';
import AppStatusIcon from '@/features/AppStatusIcon.vue';
import { useRoute, useRouter } from 'vue-router';
import SideMenu from "@/shared/ui/side-menu";

let appStore: any = inject('appStore')
appStore = appStore();

const route = useRoute();
const router = useRouter()

const menuItemsList = computed(() => router.options.routes
  .filter(el=>el?.meta?.label)
  .map(el => ({
    label: el?.meta?.label,
    path: el.path
  }))
);

</script>

<template>
<div class="mobile-layout">
  <header class="mobile-layout__header">
    <SideMenu>
      <div class="side-menu__content">
        <router-link v-for="item in menuItemsList" :to="item.path" class="menu-item">
          {{ item.label }}
        </router-link>
      </div>
    </SideMenu>
    <h1>{{route?.meta?.label}}</h1>
    <div class="mobile-layout__app-status">
      <app-status-icon />
      {{ appStore.isOnlineMode ? 'Online' : 'Offline' }}
    </div>
  </header>
  <main class="mobile-layout__content">
    <slot name="content"></slot>
  </main>
  <footer>
    <!-- @todo -->
  </footer>
</div>
</template>

<style lang="scss">
.mobile-layout {
  height: 100%;
  width: 100%;
  
  display: flex;
  flex-direction: column;

  position: relative;

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

  &__content {
    flex: 1;

    border-radius: 0px;
    background-color: #F0F2F8;
  }
}

h1 {
  line-height: 36px;
}

.menu-item {
  background-color: var(--theme-background);
  padding: 12px 8px;
  border-radius: 0px;
  display: block;
  text-decoration: none;
  color: var(--theme-text);
  font-size: 20px;

  &:not(:last-child) {
    margin-top: 10px;
  }
}
</style>