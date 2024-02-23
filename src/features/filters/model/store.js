import { defineStore } from "pinia";

export const useFiltersStore = defineStore('filters', {
  state: () => {
    return { 
      values: {
        client: 1
      },
      filters: {
        client: {
          entities: {
            1: {name: 'Клиент1'},
            2: {name: 'Клиент2'},
          }
        },
        
      }
    }
  },
  actions: {
    // enableFilter(filterId) {
    //   if (!this.filters[filterId]) {
    //     return fakse;
    //   }

    //   this.filters[filterId].isEnabled = filter;
    // },
  },
  getters: {
    getFilter: (state) => {
      return (filterId) => state.filters[filterId] ?? {};
    },
  },
});
