<script setup lang="ts">
import Foto1 from '@/assets/gallery/foto-1.jpeg'
import Foto2 from '@/assets/gallery/foto-2.jpeg'
import Foto3 from '@/assets/gallery/foto-3.jpeg'
import Foto4 from '@/assets/gallery/foto-4.jpeg'
import Foto5 from '@/assets/gallery/foto-5.jpeg'
import Foto6 from '@/assets/gallery/foto-6.jpeg'
import Foto7 from '@/assets/gallery/foto-7.jpeg'
import Foto8 from '@/assets/gallery/foto-8.jpeg'
import Foto9 from '@/assets/gallery/foto-9.jpeg'
import BingkaiAnimasi from '@/components/BingkaiAnimasi.vue'
</script>

<template>
  <main class="grid w-full min-h-screen p-2 pb-10 lg:pb-16 place-items-center absolute z-[99]">
    <div class="flex flex-col gap-2">
      <div class="leading-relaxed text-center">
        <h1
          class="inline-block mb-1 text-3xl font-bold leading-snug text-transparent lg:text-4xl bg-gradient-to-t from-purple-700 to-purple-500 bg-clip-text font-aladin"
        >
          Photo Gallery
        </h1>
      </div>
      <div class="grid grid-cols-4 gap-2">
        <img
          :src="Foto2"
          alt=""
          class="col-span-4 transition duration-300 ease-in-out delay-75 rounded-btn hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          data-aos="zoom-out-down"
        />
        <img
          :src="Foto1"
          alt=""
          class="transition duration-300 ease-in-out delay-75 rounded-btn hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          data-aos="fade-up"
        />
        <img
          :src="Foto3"
          alt=""
          class="transition duration-300 ease-in-out delay-75 rounded-btn hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          data-aos="fade-down"
        />
        <img
          :src="Foto4"
          alt=""
          class="transition duration-300 ease-in-out delay-75 rounded-btn hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          data-aos="fade-up"
        />
        <img
          :src="Foto5"
          alt=""
          class="transition duration-300 ease-in-out delay-75 rounded-btn hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          data-aos="fade-down"
        />
        <img
          :src="Foto6"
          alt=""
          class="transition duration-300 ease-in-out delay-75 rounded-btn hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          data-aos="fade-right"
        />
        <img
          :src="Foto7"
          alt=""
          class="transition duration-300 ease-in-out delay-75 rounded-btn hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          data-aos="fade-up"
        />
        <img
          :src="Foto8"
          alt=""
          class="transition duration-300 ease-in-out delay-75 rounded-btn hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          data-aos="fade-down"
        />
        <img
          :src="Foto9"
          alt=""
          class="transition duration-300 ease-in-out delay-75 rounded-btn hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          data-aos="fade-left"
        />
      </div>
    </div>
  </main>
  <BingkaiAnimasi />
</template>
