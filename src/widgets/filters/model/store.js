import { defineStore } from 'pinia'

import {getAllFilters} from '../api';

export const useFilterStore = defineStore("filter", {
  state: () => {
    return {
      values: {},
      filters: {},
      enabledFilters: []
    };
  },
  actions: {
    setFilterValue(filterKey, value) {
      console.log(filterKey, value);
      this.values[filterKey] = value;
    },
    enableFilter(filterId) {
      if (!this.filters[filterId]) {
        return fakse;
      }

      this.filters[filterId].isEnabled = filter;
    },
    async initEntitiesFilters() {
      // @todo filters
      this.filters = await getAllFilters();
    },
    /**
     * Выбрать фильтры, которые будут отображаться
     * @param {Array<string>} selectedFilterList 
     */
    selectFilters(selectedFilterList) {
      this.enabledFilters = selectedFilterList;
    }
  },
  getters: {
    /**
     * Включенные фильтры на страницу
     * @param {any} state 
     * @returns {object}
     */
    enabedFilters: (state) => {
      const enabledFilterSet = new Set(state.enabledFilters);
      let enabled = {};

      for (const filterId in state.filters) {
        if (enabledFilterSet.has(filterId)) {
          enabled[filterId] = state.filters[filterId];
        }
      }

      return enabled;
    },
  },
});
