<script setup lang="ts">
import { onMounted, ref } from 'vue'

const countdownDate = ref(new Date('2024-05-14T23:59:59').getTime())
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

function startCountDown() {
  const timer = setInterval(() => {
    const now = new Date().getTime()
    const distance = countdownDate.value - now

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000)

    if (distance < 0) {
      clearInterval(timer)
      days.value = 0
      hours.value = 0
      minutes.value = 0
      seconds.value = 0
    }
  }, 1000)
}

onMounted(() => {
  startCountDown()
})
</script>
<template>
  <main class="grid w-full min-h-screen p-2 place-items-center">
    <div class="flex flex-col gap-1 lg:gap-8">
      <div class="leading-relaxed text-center">
        <h1
          class="inline-block mb-1 text-3xl font-bold leading-snug text-transparent lg:text-2xl bg-gradient-to-t from-sky-200 to-sky-500 bg-clip-text font-frozito"
        >
          MIRACLE SUNSHINE ELSAVANA SUNANTO
        </h1>
        <h1
          class="inline-block mb-5 text-3xl font-bold leading-snug text-transparent lg:text-4xl bg-gradient-to-t from-sky-200 to-sky-500 bg-clip-text font-frozito"
        >
          (CECEL)
        </h1>
        <p class="text-lg font-medium text-sky-500">
          Putri dari <span class="font-bold text-sky-600">H.Aceng Sunanto</span> &
          <span class="font-bold text-sky-600">Mia Nurma Sunanto</span>
        </p>
      </div>

      <div class="bg-base-100 text-base-content bg-opacity-30 backdrop-blur-sm rounded-btn">
        <div class="p-4">
          <article class="font-sans leading-relaxed text-start">
            <p class="font-semibold">
              Hai teman-teman
              <span class="font-bold font-frozito">Cecel</span>
            </p>
            <p>
              Datang ya ke acara <span class="font-bold font-frozito">Cecel</span>, pakai baju warna
              <span class="font-bold text-white badge badge-info">Putih</span>/<span
                class="font-bold text-sky-500 badge"
                >Biru Muda</span
              >
            </p>
            <p>
              pada hari & tanggal
              <span class="text-white badge badge-info">Selasa, 14 Mei 2024</span> yang betempat di
              <span class="text-white badge badge-info">Villa LS Skincare Reborn</span> pukul
              <span class="text-white badge badge-info">16.00 WIB</span>
            </p>
            <p>Salam manis <span class="font-bold font-frozito">Cecel</span>.</p>
          </article>
        </div>
      </div>

      <div class="grid self-center grid-flow-col gap-0.5 lg:gap-5 text-center auto-cols-max">
        <div
          class="flex flex-col px-4 py-2 border border-opacity-50 shadow-xl bg-gradient-to-r from-sky-200 to-sky-500 text-base-100 rounded-btn border-base-content"
        >
          <span class="font-mono text-5xl countdown">
            <span :style="`--value: ${days}`"></span>
          </span>
          days
        </div>
        <div
          class="flex flex-col px-4 py-2 border border-opacity-50 shadow-xl bg-gradient-to-r from-sky-200 to-sky-500 text-base-100 rounded-btn border-base-content"
        >
          <span class="font-mono text-5xl countdown">
            <span :style="`--value: ${hours}`"></span>
          </span>
          hours
        </div>
        <div
          class="flex flex-col px-4 py-2 border border-opacity-50 shadow-xl bg-gradient-to-r from-sky-200 to-sky-500 text-base-100 rounded-btn border-base-content"
        >
          <span class="font-mono text-5xl countdown">
            <span :style="`--value: ${minutes}`"></span>
          </span>
          min
        </div>
        <div
          class="flex flex-col px-4 py-2 border border-opacity-50 shadow-xl bg-gradient-to-r from-sky-200 to-sky-500 text-base-100 rounded-btn border-base-content"
        >
          <span class="font-mono text-5xl countdown">
            <span :style="`--value: ${seconds}`"></span>
          </span>
          sec
        </div>
      </div>
    </div>
  </main>
</template>
