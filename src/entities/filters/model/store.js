import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', {
  state: () => {
    return { 
      values: {

      },
      filters: {
        client: {
          isEnabled: false,
          entities: {
            1: {name: 'Клиент1'},
            2: {name: 'Клиент2'},
          }
        }
      }
    }
  },
  actions: {
    enableFilter(filterId) {
      if (!this.filters[filterId]) {
        return fakse;
      }

      this.filters[filterId].isEnabled = filter;
    },
  },
  getters: {
    getEnabedFilters: (state) => {
      const enabledFilters = {};

      for (const filterId in state.filters) {
        const filter = state.filters[filterId];
        if (filter.isEnabled) {
          enabledFilters[filterId] = filter;
        }
      }

      return enabledFilters;

    },
  },
})