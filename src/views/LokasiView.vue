<script setup lang="ts">
import BingkaiAnimasi from '@/components/BingkaiAnimasi.vue'
</script>

<template>
  <main class="grid w-full min-h-screen p-2 place-items-center absolute z-[99]">
    <div class="flex flex-col gap-6">
      <div class="leading-relaxed text-center">
        <h1
          class="inline-block mb-1 text-3xl font-bold leading-snug text-transparent lg:text-4xl bg-gradient-to-t from-purple-700 to-purple-500 bg-clip-text font-aladin"
          data-aos="fade-up"
        >
          Lokasi
        </h1>
      </div>
      <div
        class="bg-gradient-to-t from-purple-700 to-purple-500 text-base-content bg-opacity-30 backdrop-blur-sm rounded-box"
        data-aos="fade-down"
      >
        <div class="p-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1036.1746511090425!2d108.27595847211408!3d-6.8408376569407405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f25edae6d4345%3A0xd1db95b910b057d2!2sLS%20Skincare%20Official%2002!5e0!3m2!1sen!2sid!4v1715411601730!5m2!1sen!2sid"
            width="600"
            height="450"
            style="border: 0"
            :allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-[250px] lg:h-[350px] rounded-box"
          ></iframe>
        </div>
      </div>
      <div class="text-white bg-purple-800/30 backdrop-blur-sm rounded-box" data-aos="fade-right">
        <div class="p-4">
          <article class="font-sans leading-relaxed text-center">
            <p>
              Blok Kubangsari, RT/RW 10/04, Tenjolayar, Kec. Cigasong, Kabupaten Majalengka, Jawa
              Barat 45476
            </p>
          </article>
        </div>
      </div>
    </div>
  </main>
  <BingkaiAnimasi />
</template>
