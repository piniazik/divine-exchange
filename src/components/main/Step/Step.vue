<template>
  <div class="pt-35 pb-35">
    <div class="container">
      <div class="relative">
      <div class="flex flex-wrap">
        <div class="basis-2/4 xs:basis-full xs:order-2">
          <div class="w-full max-w-[580px]">
            <h2 class="text-xlg text-white font-black md:text-[35px]">Take your first step into safe, secure crypto investing</h2>
          </div>
          <div class="pt-4 pb-8 w-full max-w-[580px]">
            <p class="text-base_s text-gray font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div class="">
          <GetStartedBtn
          :height="btnHeight"
          :paddingLeft="paddingLeftBtn"
          :paddingRight="paddingRightBtn"
          :paddingTop="paddingTopBtn"
          :paddingBottom="paddingBottomBtn"
          >Get Started
          </GetStartedBtn>
          </div>
        </div>
        <div class="basis-2/4 xs:basis-full">
          <img src="/src/assets/images/step.png" alt="step" class="relative z-10">
          <img src="/src/assets/images/step-bg.png" alt="step" class="absolute -right-1/4 top-0 bottom-0 mx-auto my-auto xs:bottom-auto">
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  import GetStartedBtn from '@/components/buttons/GetStartedBtn.vue'
  export default {
    name: 'Step',
    components: {
      GetStartedBtn,
    },
    data() {
      return {
        btnHeight: '2.5rem',
        paddingLeftBtn: '2.0625rem',
        paddingRightBtn: '2.0625rem',
        paddingTopBtn: '1.25rem',
        paddingBottomBtn: '1.25rem',
      }
    }
  }
</script>