<template>
  <main class="grid w-full min-h-screen p-2 place-items-center absolute z-[99]">
    <div class="flex flex-col items-center justify-center gap-3">
      <div class="mb-6 leading-relaxed text-center">
        <p class="mb-2 font-semibold text-purple-900" data-aos="fade-down">
          Silakan bergabung dengan kami untuk
        </p>
        <h1
          class="inline-block text-4xl font-bold text-transparent capitalize bg-gradient-to-t from-purple-700 to-purple-500 bg-clip-text font-aladin"
          data-aos="fade-right"
        >
          magical party
        </h1>
        <h1
          class="inline-block text-xl font-bold text-transparent capitalize lg:text-2xl bg-gradient-to-t from-purple-700 to-purple-500 bg-clip-text font-aladin"
          data-aos="fade-left"
        >
          miracle sunshine elsavana sunanto (CECEL)
        </h1>
      </div>
      <div class="mb-3 avatar">
        <div
          class="rounded-full w-36 ring ring-white ring-offset-purple-500 ring-offset-2"
          data-aos="fade-down"
        >
          <img :src="Foto10" />
        </div>
      </div>
      <button
        @click="openPage"
        class="text-white btn bg-gradient-to-r from-purple-700 to-purple-500"
        data-aos="fade-up"
      >
        Open Invitation
      </button>
    </div>
  </main>

  <BingkaiAnimasi />
</template>

<script lang="ts" setup>
import Foto10 from '@/assets/gallery/foto-10.jpeg'
import BingkaiAnimasi from '@/components/BingkaiAnimasi.vue'
import { useCounterStore } from '@/stores/counter'

const useCounter = useCounterStore()
function openPage() {
  useCounter.setOpen()
  useCounter.setPlaying()
  const elem = document.documentElement
  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch((err) => {
      console.error('Error attempting to enable full-screen mode:', err.message)
    })
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<style></style>
