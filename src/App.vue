<script setup lang="ts">
import { HomeIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import { RouterLink, RouterView } from 'vue-router'
import AtasFrozen from '@/assets/bingkai/atas-frozen.png'
import BawahFrozen from '@/assets/bingkai/bawah-frozen.png'
import BawahBungaFrozen from '@/assets/bingkai/bawah-bunga-frozen.png'
import EsBackground from '@/assets/background/bg-1.png'
import { computed, onMounted, ref } from 'vue'
import { useMenuStore } from './router/menu'
import Foto10 from '@/assets/gallery/foto-10.jpeg'
import Musik from '@/assets/sound/backsound-1.mp3'

const isOpen = ref(true)
const useMenu = useMenuStore()
const menus = computed(() => useMenu.menus)

const isPlaying = ref(false)
const audio = ref<any>(null)

function openPage() {
  isOpen.value = false
  isPlaying.value = true
  audio.value.play()
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

function toogleMusic() {
  if (isPlaying.value) {
    audio.value.pause()
  } else {
    audio.value.play()
  }

  isPlaying.value = !isPlaying.value
}

onMounted(() => {
  audio.value = new Audio(Musik)
  audio.value.loop = true
})
</script>

<template>
  <main class="grid w-full place-items-center">
    <div
      class="relative flex flex-col w-full max-h-screen min-h-screen overflow-hidden border-0 lg:border lg:max-w-lg lg:w-full lg:rounded-md"
    >
      <section class="min-h-screen mb-16 bg-base-200">
        <img :src="AtasFrozen" alt="" class="absolute top-0 z-10 inline-flex animate-zoom" />
        <section class="relative z-20">
          <main v-if="isOpen" class="grid w-full min-h-screen p-2 place-items-center">
            <div class="flex flex-col items-center justify-center gap-3">
              <div class="mb-6 leading-relaxed text-center">
                <p class="mb-2 text-sky-600">Silakan bergabung dengan kami untuk</p>
                <h1
                  class="inline-block text-4xl font-bold text-transparent bg-gradient-to-t from-sky-200 to-sky-500 bg-clip-text font-frozito"
                >
                  FROZEN PARTY
                </h1>
                <h1
                  class="inline-block text-xl font-bold text-transparent lg:text-2xl bg-gradient-to-t from-sky-200 to-sky-500 bg-clip-text font-frozito"
                >
                  MIRACLE SUNSHINE ELSAVANA SUNANTO (CECEL)
                </h1>
              </div>
              <div class="mb-3 avatar">
                <div class="rounded-full w-36 ring ring-sky-500 ring-offset-base-100 ring-offset-2">
                  <img :src="Foto10" />
                </div>
              </div>
              <button
                @click="openPage"
                class="btn bg-gradient-to-r from-sky-200 to-sky-500 text-base-100"
              >
                Open Invitation
              </button>
            </div>
          </main>
          <RouterView v-else />
        </section>
        <img :src="EsBackground" alt="" class="absolute top-0 right-0 opacity-65" />
        <img :src="BawahFrozen" v-if="isOpen" alt="" class="absolute bottom-0 z-10" />
        <img :src="BawahBungaFrozen" alt="" class="absolute bottom-0 animate-zoom" />
      </section>
      <button
        v-if="!isOpen"
        @click="toogleMusic"
        class="absolute z-30 text-white btn btn-circle bg-sky-500 right-4 bottom-20 hover:bg-sky-700"
      >
        <PlayIcon v-if="!isPlaying" class="w-6 h-6" />
        <PauseIcon v-else class="w-6 h-6" />
      </button>
      <nav
        v-if="!isOpen"
        class="absolute bottom-0 z-20 w-full bg-opacity-50 bg-base-100 backdrop-blur-lg min-h-16"
      >
        <ul
          class="relative flex items-center justify-center w-full gap-2 p-2 overflow-x-auto lg:max-w-lg"
        >
          <li>
            <a
              @click="isOpen = !isOpen"
              :class="['btn btn-info btn-square', isOpen ? '' : 'btn-outline']"
            >
              <HomeIcon class="w-5 h-5" />
            </a>
          </li>
          <li v-for="(item, index) in menus" :key="index">
            <router-link :to="{ name: item.route }" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                :class="['btn btn-info btn-square', isActive ? '' : 'btn-outline']"
              >
                <component :is="item.icon" class="w-5 h-5" />
              </a>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>
