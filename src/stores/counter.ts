import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    isOpen: true,
    isPlaying: true
  }),
  actions: {
    setOpen() {
      this.isOpen = !this.isOpen
    },
    setPlaying() {
      this.isPlaying = !this.isPlaying
    }
  }
})
