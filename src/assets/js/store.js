import { defineStore } from 'pinia'

export const getStore = defineStore('store', {
  state: () => {
    return {
      lang: localStorage.getItem("lang") == null ? 1 : localStorage.getItem("lang"),
      data: {}
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
})