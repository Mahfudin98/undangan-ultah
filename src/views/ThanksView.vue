<script setup lang="ts">
import BingkaiAnimasi from '@/components/BingkaiAnimasi.vue'
</script>

<template>
  <main class="grid w-full min-h-screen p-2 place-items-center absolute z-[99]">
    <div class="flex flex-col gap-6">
      <div class="text-white bg-purple-900/30 backdrop-blur-sm rounded-box" data-aos="fade-down">
        <div class="p-4">
          <article class="font-sans leading-relaxed text-center">
            <p>
              Maupakan suatu kebahagiaan dan kehormatan bagi kami, apabila teman-teman, berkenan
              hadir dan memberikan do'a.
            </p>
            <p>Salam & Hormat Kami.</p>
            <p class="text-lg font-semibold text-purple-900">H.Aceng Sunanto & Mia Nurma Sunanto</p>
          </article>
        </div>
      </div>
      <div class="leading-relaxed text-center">
        <h1
          class="inline-block mb-1 text-3xl font-bold leading-snug text-transparent capitalize lg:text-4xl bg-gradient-to-t from-purple-700 to-purple-500 bg-clip-text font-aladin"
          data-aos="fade-right"
        >
          miracle sunshine elsavana sunanto
        </h1>
        <h1
          class="inline-block mb-5 text-3xl font-bold leading-snug text-transparent capitalize lg:text-4xl bg-gradient-to-t from-purple-700 to-purple-500 bg-clip-text font-aladin"
          data-aos="fade-left"
        >
          (CECEL)
        </h1>
      </div>
    </div>
  </main>
  <BingkaiAnimasi />
</template>
