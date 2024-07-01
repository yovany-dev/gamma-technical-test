import { defineStore } from "pinia";

export const useProductStore = defineStore('product', {
  state: () => ({
    data: [],
  }),

  actions: {
    async getData() {
      try {
        const headers =  {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        const res = await fetch('data/data.json', headers)
        const data = await res.json();
        this.data = data;
      } catch (error) {
        throw new Error(error);
      }
    }
  }
});
