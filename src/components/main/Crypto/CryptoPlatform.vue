<template>
  <div class="pt-35 pb-35">
  <div class="container">
    <div class="w-full max-w-195 my-0 mx-auto text-center">
      <div class="">
        <h2 class="text-xlg text-white font-black md:text-[35px]">A cryto mining platform that invest in you</h2>
      </div>
      <div class="pt-4 pb-8 w-full max-w-145 my-0 mx-auto">
        <span class="text-base_s text-gray font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor</span>
      </div>
      <div class="flex justify-center">
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
  </div>
</div>
</template>
<script>
  import GetStartedBtn from '@/components/buttons/GetStartedBtn.vue'
  export default {
    name: 'CryptoPlatform',
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