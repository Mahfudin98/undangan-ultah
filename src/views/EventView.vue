<script setup lang="ts">
import BingkaiAnimasi from '@/components/BingkaiAnimasi.vue'
import { onMounted, ref } from 'vue'

const countdownDate = ref(new Date('2025-05-14T15:00:00').getTime())
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
  <main class="grid w-full min-h-screen p-2 place-items-center absolute z-[99]">
    <div class="flex flex-col items-center justify-center gap-1 lg:gap-8">
      <div class="max-w-xs leading-relaxed text-center">
        <h1
          class="inline-block mb-1 text-3xl font-bold leading-snug text-transparent capitalize lg:text-2xl bg-gradient-to-t from-purple-700 to-purple-500 bg-clip-text font-aladin"
          data-aos="fade-right"
        >
          miracle sunshine elsavana sunanto
        </h1>
        <h1
          class="block mb-5 text-3xl font-bold leading-snug text-transparent lg:text-4xl bg-gradient-to-t from-purple-700 to-purple-500 bg-clip-text font-aladin"
          data-aos="fade-left"
        >
          (cecel)
        </h1>
        <p class="text-lg font-medium text-purple-500" data-aos="fade-down">
          Putri dari <span class="font-bold text-purple-600">H.Aceng Sunanto</span> &
          <span class="font-bold text-purple-600">Mia Nurma Sunanto</span>
        </p>
      </div>

      <div data-aos="fade-right">
        <div class="max-w-md bg-purple-700/30 text-info-content backdrop-blur-md rounded-box">
          <div class="p-4">
            <article class="font-sans leading-relaxed text-start">
              <p class="font-semibold">
                Hai teman-teman
                <span class="font-bold font-aladin">Cecel</span>
              </p>
              <p>
                Datang ya ke acara <span class="font-bold font-aladin">Cecel</span>, pakai baju
                warna
                <span class="font-bold text-purple-900 badge badge-white">Putih</span>
              </p>
              <p>
                pada hari & tanggal
                <span class="text-white bg-purple-500 badge">Rabu, 14 Mei 2025</span> yang betempat
                di
                <span class="text-white bg-purple-500 badge">Villa LS Skincare Reborn</span>
                pukul
                <span class="text-white bg-purple-500 badge">15.00 WIB</span>
              </p>
              <p>Salam manis <span class="font-bold font-aladin">Cecel</span>.</p>
            </article>
          </div>
        </div>
      </div>

      <div class="grid self-center grid-flow-col gap-0.5 lg:gap-5 text-center auto-cols-max">
        <div
          class="flex flex-col px-4 py-2 border border-opacity-50 shadow-xl bg-gradient-to-r from-purple-300 to-purple-500 text-slate-900 rounded-box border-base-content"
          data-aos="fade-right"
        >
          <span class="font-mono text-5xl countdown">
            <span :style="`--value: ${days}`"></span>
          </span>
          Hari
        </div>
        <div
          class="flex flex-col px-4 py-2 border border-opacity-50 shadow-xl bg-gradient-to-r from-purple-300 to-purple-500 text-slate-900 rounded-box border-base-content"
          data-aos="fade-up"
        >
          <span class="font-mono text-5xl countdown">
            <span :style="`--value: ${hours}`"></span>
          </span>
          Jam
        </div>
        <div
          class="flex flex-col px-4 py-2 border border-opacity-50 shadow-xl bg-gradient-to-r from-purple-300 to-purple-500 text-slate-900 rounded-box border-base-content"
          data-aos="fade-down"
        >
          <span class="font-mono text-5xl countdown">
            <span :style="`--value: ${minutes}`"></span>
          </span>
          Menit
        </div>
        <div
          class="flex flex-col px-4 py-2 border border-opacity-50 shadow-xl bg-gradient-to-r from-purple-300 to-purple-500 text-slate-900 rounded-box border-base-content"
          data-aos="fade-left"
        >
          <span class="font-mono text-5xl countdown">
            <span :style="`--value: ${seconds}`"></span>
          </span>
          Detik
        </div>
      </div>
    </div>
  </main>
  <BingkaiAnimasi />
</template>
