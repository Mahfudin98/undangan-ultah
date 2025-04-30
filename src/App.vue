<script setup lang="ts">
import { PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
import { useMenuStore } from './router/menu'
import Musik from '@/assets/sound/backsound-1.mp3'
import { useCounterStore } from './stores/counter'

const useCounter = useCounterStore()
const isPlaying = computed(() => useCounter.isPlaying)
const useMenu = useMenuStore()
const menus = computed(() => useMenu.menus)
const audio = ref<any>(null)

function toogleMusic() {
  if (isPlaying.value) {
    audio.value.pause()
  } else {
    audio.value.play()
  }

  useCounter.setPlaying()
}

onMounted(() => {
  audio.value = new Audio(Musik)
  audio.value.loop = true
})
watch(isPlaying, () => {
  if (isPlaying.value) {
    audio.value.pause()
  } else {
    audio.value.play()
  }
})
</script>

<template>
  <main class="grid w-full place-items-center bg-info">
    <div
      class="relative flex flex-col w-full max-h-screen min-h-screen overflow-hidden border-0 lg:border lg:max-w-lg lg:w-full lg:rounded-md"
    >
      <RouterView />
      <button
        @click="toogleMusic"
        class="absolute z-[99] text-white btn btn-circle bg-purple-700 right-4 bottom-20 hover:bg-opacity-80"
      >
        <PlayIcon v-if="isPlaying" class="w-6 h-6" />
        <PauseIcon v-else class="w-6 h-6" />
      </button>
      <nav class="absolute bottom-0 z-[999] w-full bg-info min-h-16">
        <ul
          class="relative flex items-center justify-center w-full gap-2 p-2 overflow-x-auto lg:max-w-lg"
        >
          <li v-for="(item, index) in menus" :key="index">
            <router-link :to="{ name: item.route }" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                :class="['btn bg-purple-700 text-white btn-square', isActive ? '' : 'btn-outline']"
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
