<script setup lang="ts">
import { HomeIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import { RouterLink, RouterView } from 'vue-router'
import AtasFrozen from '@/assets/bingkai/aladin/bingkai-atas.png'
import BawahFrozen from '@/assets/bingkai/aladin/bingkai-bawah.png'
// import BawahBungaFrozen from '@/assets/bingkai/bawah-bunga-frozen.png'
import EsBackground from '@/assets/bingkai/aladin/bg-aladin.png'
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
  <main class="grid w-full place-items-center bg-slate-900">
    <div
      class="relative flex flex-col w-full max-h-screen min-h-screen overflow-hidden border-0 lg:border lg:max-w-lg lg:w-full lg:rounded-md"
    >
      <section class="min-h-screen mb-16 bg-slate-800">
        <img :src="AtasFrozen" alt="" class="absolute top-0 z-10 inline-flex animate-zoom" />
        <section class="relative z-20">
          <main v-if="isOpen" class="grid w-full min-h-screen p-2 place-items-center">
            <div class="flex flex-col items-center justify-center gap-3">
              <div class="mb-6 leading-relaxed text-center">
                <p class="mb-2 font-semibold text-yellow-500">
                  Silakan bergabung dengan kami untuk
                </p>
                <h1
                  class="inline-block text-4xl font-bold text-transparent capitalize bg-gradient-to-t from-white to-yellow-600 bg-clip-text font-aladin"
                >
                  magical party
                </h1>
                <h1
                  class="inline-block text-xl font-bold text-transparent capitalize lg:text-2xl bg-gradient-to-t from-white to-yellow-600 bg-clip-text font-aladin"
                >
                  miracle sunshine elsavana sunanto (CECEL)
                </h1>
              </div>
              <div class="mb-3 avatar">
                <div class="rounded-full w-36 ring ring-white ring-offset-yellow-500 ring-offset-2">
                  <img :src="Foto10" />
                </div>
              </div>
              <button
                @click="openPage"
                class="btn bg-gradient-to-r from-yellow-300 to-yellow-500 text-slate-900"
              >
                Open Invitation
              </button>
            </div>
          </main>
          <RouterView v-else />
        </section>
        <img
          :src="EsBackground"
          alt=""
          class="absolute top-0 right-0 object-cover h-full opacity-65"
        />
        <img :src="BawahFrozen" v-if="isOpen" alt="" class="absolute bottom-0 z-10 animate-zoom" />
        <!-- <img :src="BawahBungaFrozen" alt="" class="absolute bottom-0 animate-zoom" /> -->
      </section>
      <button
        v-if="!isOpen"
        @click="toogleMusic"
        class="absolute z-30 text-white btn btn-circle bg-slate-500 right-4 bottom-20 hover:bg-slate-700"
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
              :class="['btn btn-warning btn-square', isOpen ? '' : 'btn-outline']"
            >
              <HomeIcon class="w-5 h-5" />
            </a>
          </li>
          <li v-for="(item, index) in menus" :key="index">
            <router-link :to="{ name: item.route }" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                :class="['btn btn-warning btn-square', isActive ? '' : 'btn-outline']"
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
