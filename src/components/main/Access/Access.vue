<template>
  <div class="pt-35 pb-35">
  <div class="container">
    <div class="relative">
      <div class="flex flex-wrap">
        <div class="basis-2/4 xs:basis-full">
          <img src="/src/assets/images/shield.png" alt="shield" class="relative z-10 xs:w-[14rem] xs:h-[14rem] xs:mx-auto">
          <img src="/src/assets/images/sphere-orange.png" alt="shield" class="absolute -left-2/4 top-0 bottom-0 mx-auto my-auto xs:bottom-auto">
        </div>
        <div class="basis-2/4 xs:basis-full pt-20">
          <div class="">
            <h2 class="text-xlg text-white font-black md:text-[35px]">24/7 access to full service customer support</h2>
          </div>
          <div class="pt-4 pb-8 w-full max-w-145">
            <p class="text-base_s text-gray font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div class="">
          <GetStartedWithoutBg>Get Started</GetStartedWithoutBg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import GetStartedWithoutBg from '@/components/buttons/GetStartedWithoutBg.vue'
  export default {
    name: 'Access',
    components: {
      GetStartedWithoutBg,
    },
  }
</script>