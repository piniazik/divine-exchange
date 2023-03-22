<template>
  <div class="pb-[106px] bg-bg-footer bg-no-repeat bg-cover bg-top-4">
  <div class="container">
    <div class="flex flex-wrap justify-between">
      <!--1-->
      <div class="basis-[380px]">
        <p class="text-white opacity-30 font-normal text-base_s">
         CoinFlip, the world's leading bitcoin ATM operator, makes it so flippin' easy to buy and sell bitcoin via cash, card, or bank transfer.
        </p>
        <p class="text-white opacity-30 font-normal text-base_s pt-5">
          Sign up to get the latest in CoinFlip news, discounts, and more.
        </p>
        <ReceiveInput class="ml-0 mt-10 mb-10"/>
        <p class="text-white opacity-30 font-normal text-extra_xs">© 2021 GPD Holdings, LLC FinCEN MSB</p>
      </div>
      <!--2-->
      <div class="basis-[278px]">
        <ul class="">
          <li class="pb-5"><a href="/" class="text-white opacity-30 font-normal text-base_s transition-all duration-300 hover:text-blue hover:opacity-60">Company</a></li>
          <li class="pb-5"><a href="/" class="text-white opacity-30 font-normal text-base_s transition-all duration-300 hover:text-blue hover:opacity-60">About</a></li>
          <li class="pb-5"><a href="/" class="text-white opacity-30 font-normal text-base_s transition-all duration-300 hover:text-blue hover:opacity-60">Careers</a></li>
          <li class="pb-5"><a href="/" class="text-white opacity-30 font-normal text-base_s transition-all duration-300 hover:text-blue hover:opacity-60">Press</a></li>
          <li class=""><a href="/" class="text-white opacity-30 font-normal text-base_s transition-all duration-300 hover:text-blue hover:opacity-60">News</a></li>
        </ul>
      </div>
      <!--3-->
      <div class="basis-[280px]">
        <ul class="">
          <li class="pb-5"><a href="/" class="text-white opacity-30 font-normal text-base_s transition-all duration-300 hover:text-blue hover:opacity-60">Privacy Policy and Terms of Service</a></li>
          <li class="pb-5"><a href="/" class="text-white opacity-30 font-normal text-base_s transition-all duration-300 hover:text-blue hover:opacity-60">CoinFlip Privacy Policy</a></li>
          <li class="pb-5"><a href="/" class="text-white opacity-30 font-normal text-base_s transition-all duration-300 hover:text-blue hover:opacity-60">CoinFlip Biometrics Privacy Policy</a></li>
          <li class="pb-5"><a href="/" class="text-white opacity-30 font-normal text-base_s transition-all duration-300 hover:text-blue hover:opacity-60">CoinFlip Financial Privacy Notice</a></li>
          <li class=""><a href="/" class="text-white opacity-30 font-normal text-base_s transition-all duration-300 hover:text-blue hover:opacity-60">CoinFlip Terms of Service</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import ReceiveInput from '@/components/inputs/ReceiveInput.vue'
export default {
  name: 'FooterArea',
	components: { 
    ReceiveInput
	},

}
</script>