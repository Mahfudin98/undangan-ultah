<template>
  <div
    class="absolute z-50 bottom-0 -left-5"
    data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom"
    data-aos-duration="1000"
  >
    <img :src="Balon" class="w-[40%] animate-bounce-low" alt="" />
  </div>
  <div class="grid justify-start z-30 absolute top-10 left-5 w-full h-full" data-aos="fade-right">
    <img :src="Jin" class="w-[120px] animate-wiggle" alt="" />
  </div>
  <img
    :src="Bingkai1"
    class="absolute top-0 z-10 opacity-80 mask-t-from-60% mask-b-to-50%"
    alt=""
  />
  <img
    :src="Bg"
    class="w-full absolute top-0 h-full mask-b-from-50% opacity-65 mask-b-to-80%"
    alt=""
  />
  <div
    class="absolute z-40 -bottom-[10vh] -left-[10vw]"
    data-aos="fade-right"
    data-aos-duration="2000"
  >
    <img :src="Ornamen" class="w-[40%] animate-spin-cs" alt="" />
  </div>
  <div
    class="absolute z-40 -bottom-[20vh] -right-[52vw]"
    data-aos="fade-left"
    data-aos-duration="1000"
  >
    <img :src="Ornamen" class="w-[40%] animate-spin-cs" alt="" />
  </div>
  <div
    class="grid place-items-center absolute z-40 w-full h-full -bottom-[50vh]"
    data-aos="fade-up"
  >
    <img :src="Ornamen" class="w-[70%] animate-spin-cs" alt="" />
  </div>
  <div
    class="grid justify-center z-30 absolute top-10 right-0 w-full h-full"
    data-aos="zoom-out"
    data-aos-duration="500"
  >
    <img :src="Silwet" class="w-[120px] opacity-90 animate-wiggle-putri" alt="" />
  </div>
  <div
    class="grid place-items-center absolute -top-16 left-0 z-20 w-full h-full"
    data-aos="zoom-in-up"
    data-aos-duration="300"
  >
    <img :src="Bingkai" class="h-[85%] w-full" alt="" />
  </div>

  <div
    class="absolute z-50 bottom-14 right-0"
    data-aos="fade-left"
    data-aos-anchor-placement="bottom-bottom"
  >
    <img :src="Putri" class="w-[150px] animate-wiggle-putri" alt="" />
  </div>
</template>

<script lang="ts" setup>
import Bingkai from '@/assets/image/bingkai.png'
import Silwet from '@/assets/image/silwet.png'
import Putri from '@/assets/image/putri.png'
import Jin from '@/assets/image/jin.png'
import Bingkai1 from '@/assets/image/bingkai-1.png'
import Ornamen from '@/assets/image/ornamen.png'
import Bg from '@/assets/image/bg.png'
import Balon from '@/assets/image/balon.png'
</script>

<style></style>
