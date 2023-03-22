<template>
    <div class="container">
      <div class="pl-15.25 mb-15 pt-10">
        <h2 class="text-xl font-bold capitalize lg:text-mtitle">Choose Your Crypto Assets</h2>
      </div>
      <div class="relative">
       <!--<div class="w-41.25 group">
         <span class="text-blue-50 mr-4 transition duration-300 group-hover:cursor-pointer group-hover:text-white">View more</span><ArrowIcon class="fill-blue-50 transition duration-300 group-hover:cursor-pointer group-hover:fill-white" />
      </div>--->
  <swiper
    :slides-per-view="4"
    :space-between="61"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :modules="modules"
    :pagination="{clickable: true}"
    :breakpoints="swiperOptions.breakpoints"
    class="px-15.25 pt-11.75 pb-19.75 lg:px-0"
  >
    <swiper-slide
    class="group"
    v-for = "content in swiperContent" :key="content.swiperContent"
    >
    <div class="bg-blue-800 rounded-lg text-black h-30.25 transition duration-300 group-hover:bg-blue-50 group-hover:cursor-pointer">
      <div class="flex items-center px-5 py-5 h-full">
          <div class="pr-5">
            <img :src="content.src" alt="Coin" class="">
          </div>
          <div class="">
            <div class="text-xs font-bold text-white transition duration-300 group-hover:text-black">{{ content.title }}</div>
            <div class="text-xs font-normal text-red transition duration-300 group-hover:text-black">{{ content.description }}</div>
          </div>
      </div>
      </div>
    </swiper-slide>
  </swiper>
</div>
</div>
</template>
<script>
  import ArrowIcon from '@/components/icons/ArrowIcon.vue'
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide} from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  export default {
    name: 'AssetsSection',
    components: {
      Swiper,
      SwiperSlide,
      ArrowIcon
    },
    data(){
      return {
        swiperContent: [
          {title: 'BTC', description: 'Bitcoin', src: '../images/bitcoin.png'},
          {title: 'ETH', description: 'Ethereum', src: '../images/eth.png'},
          {title: 'XLM', description: 'Stellar', src: '../images/xlm.png'},
          {title: 'Doge', description: 'Doge Coin', src: '../images/doge.png'},
          {title: 'BTC', description: 'Bitcoin', src: '../images/bitcoin.png'},
          {title: 'BTC', description: 'Bitcoin', src: '../images/eth.png'},
          {title: 'BTC', description: 'Bitcoin', src: '../images/xlm.png'},
          {title: 'BTC', description: 'Bitcoin', src: '../images/doge.png'}
        ]
    }
  },
    setup() {
      const onSwiper = (swiper) => {
        //console.log(swiper);
      };
      const onSlideChange = () => {
        //console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
        swiperOptions: {
          breakpoints: {       
            960: {       
              slidesPerView: 4,
              spaceBetween: 61     
            },          
            720: {       
              slidesPerView: 3,       
              spaceBetween: 50     
            },   
            540: {       
              slidesPerView: 1,       
              spaceBetween: 30     
              },
            320: {       
              slidesPerView: 1,       
              spaceBetween: 30     
              },
            }  
          }
        };
      },
  };
</script>