<script setup>
import { ref, computed } from 'vue';

const $emits = defineEmits(['changeTab'])

// @todo
const exampleTabs = {
  commonInfo: {
    label: 'Общая информация'
  },
  cars: {
    label: 'Техника'
  },
  finance: {
    label: 'Финансы'
  }
};

const isShowAllTabs = ref(false);
const selectedTabId = ref(Object.keys(exampleTabs)[0]); //ref(null);

function openTabsList() {
  isShowAllTabs.value = !isShowAllTabs.value;
}

function selectTab(tabId) {
  selectedTabId.value = tabId;
  isShowAllTabs.value = false;
  $emits('changeTab', tabId);
}

const disableTabs = computed(() => {
  const allTabsObject = Object.assign({}, exampleTabs)
  if (selectedTabId.value !== null) {
    delete allTabsObject[selectedTabId.value];
  }
  return allTabsObject;
})

const selectedTabLabel = computed(() => {
  return exampleTabs[selectedTabId?.value]?.label ?? null;
});

</script>

<template>
  <div class="tabs">
    <button @click="openTabsList" class="tabs__selected-btn">{{ selectedTabLabel }}</button>
    <transition>
      <div v-if="isShowAllTabs">
        <button class="tabs__offline-btn" @click="selectTab(id)" v-for="(tab, id) in disableTabs" :key="id">
          {{ tab.label }}
        </button>
      </div>
    </transition>
  </div>
</template>

<style>
.tabs {
  background-color: white;
  padding: 5px;
  /* height: 46px; */

  /* height: 100px; */
  display: flex;
  flex-direction: column;

  gap: 5px;
}

.tabs__selected-btn {
  width: 100%;
  /* height: 100%; */
  height: 46px;

	display: inline-block;
	appearance: none;
	cursor: pointer;
	white-space: nowrap;
	max-inline-size: 100%;
	vertical-align: middle;
	font-weight: 500;
	padding-block: 0px;
	padding-inline: 12px;
	font-size: 1rem;
	line-height: 1.4286rem;
	border-radius: 6px;
	min-inline-size: 112px;
	color: rgb(255, 255, 255);
	background-color: #296CEE;
	outline-color: rgb(0, 0, 0);
  border-width: 0px;
}

.tabs__offline-btn {
  width: 100%;
  /* height: 100%; */
  height: 46px;

	display: inline-block;
	appearance: none;
	cursor: pointer;
	white-space: nowrap;
	max-inline-size: 100%;
	vertical-align: middle;
	font-weight: 500;
	padding-block: 0px;
	padding-inline: 12px;
	font-size: 1rem;
	line-height: 1.4286rem;
	border-radius: 6px;
	min-inline-size: 112px;
	color: #A1A5BD;
	background-color: white;
	outline-color: rgb(0, 0, 0);
  border-width: 0px;
}

/* @todo */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>