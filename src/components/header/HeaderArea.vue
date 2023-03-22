<template>
  <div class="bg-bg-header w-full bg-no-repeat bg-cover bg-center min-h-360 xs:bg-contain xs:bg-top">
    <HeaderPart />
    <div class="w-full max-w-360 min-h-177.75 flex flex-col justify-center items-center my-0 mx-auto">
      <div class="w-full max-w-195 text-center">
        <h1 class="text-xxl font-black text-white md:text-[50px] xs:text-[40px]">We make crypto clear and simple</h1>
      </div>
      <div class="pt-8">
        <GetStartedBtn
          :height="btnHeight"
          :paddingLeft="paddingLeftBtn"
          :paddingRight="paddingRightBtn"
          :paddingTop="paddingTopBtn"
          :paddingBottom="paddingBottomBtn"
          >
          Get Started
        </GetStartedBtn>
      </div>
    </div>
    <!--conditions-->
    <div class="pt-57.5 pb-20 xs:pt-0">
      <div class="row">
        <div class="container mx-auto">
          <div class="grid grid-cols-cards-responsive gap-x-5 gap-y-5 xs:grid-cols-cards-mobile">
            <div class="bg-black-500 rounded-big h-full min-h-86.5 py-8 px-6 text-center"
              v-for="(area, index) in areas"
              :key="index"
            >
              <div class="flex justify-center">
                <img :src="area.image" alt="image" class="">
              </div>
              <div class="pt-4">
                <div class="text-white text-lg font-extrabold md:text-[25px]">{{ area.title }}</div>
                <p class="pt-4 text-base_s text-gray font-normal">
                  {{ area.description }}
                  </p>
              </div>
              <div class="pt-8 flex justify-center">
                <a href="" class="flex items-center text-violet-light text-base font-semibold transition duration-500 group hover:text-violet">Get Started<ArrowIcon class="stroke-violet-light ml-1.5 transition duration-500 group-hover:translate-x-2 group-hover:stroke-violet"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import HeaderPart from '@/components/header/HeaderPart.vue'
  import GetStartedBtn from '@/components/buttons/GetStartedBtn.vue'
  import CreateIcon from '@/components/icons/CreateIcon.vue'
  import ArrowIcon from '@/components/icons/ArrowIcon.vue' 
  import LoginIcon from '@/components/icons/LoginIcon.vue'
  import ManageIcon from '@/components/icons/ManageIcon.vue'
  export default {
    name: 'HeaderArea',
    components: {
      HeaderPart,
      GetStartedBtn,
      CreateIcon,
      ArrowIcon,
      LoginIcon,
      ManageIcon
    },
    data() {
      return {
        btnHeight: '2.5rem',
        paddingLeftBtn: '2.0625rem',
        paddingRightBtn: '2.0625rem',
        paddingTopBtn: '1.25rem',
        paddingBottomBtn: '1.25rem',
        areas: [
          { image: '../images/1.svg', title:'Create', description:'Control and scale your position size with small contract sizes. One BTCUSD contract in FXCM is equivalent to 1% of the underlying Bitcoin price.'},
          { image: '../images/2.svg', title:'Login', description:'Trade the most popular cryptocurrency CFDs with 2:1 leverage (50% margin). However, keep in mind that margin trading is risky as it can greatly increase your losses.'},
          { image: '../images/3.svg', title:'Manage', description:'You can search for a specific Crypto CFD or you can browse the entire offer in our Symbol List. Once you find the cryptocurrency you want to trade, simply double-click to sign up.'},
        ]
      }
    }
  }
</script>