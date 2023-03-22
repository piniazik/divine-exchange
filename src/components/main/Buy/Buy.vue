<template>
  <div class="container">
    <div class="w-full max-w-195 my-0 mx-auto text-center pb-11.5">
      <div class="">
        <h2 class="text-xlg text-white font-black md:text-[35px]">Buy and sell with the lowest fees in the industry</h2>
      </div>
      <div class="pt-4 pb-8 w-full max-w-145 my-0 mx-auto">
        <p class="text-base_s text-gray font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet</p>
      </div>
      <div class="flex justify-center">
        <a href="" class="flex items-center text-violet-light relative z-10 text-base font-semibold transition duration-500 group hover:text-violet">Learn More<ArrowIcon class="stroke-violet-light ml-1.5 transition duration-500 group-hover:translate-x-2 group-hover:stroke-violet"/></a>
      </div>
    </div>
    <div class="pb-20">
      <div class="py-8 px-8 h-full min-h-[297px] w-full max-w-[400px] mx-auto my-0 bg-black-500 rounded-big">
      <div class="flex flex-wrap relative z-10">
          <CryptoCard 
            v-for="(crypto, index) in cryptos"
            :key="crypto.id"
            :name="index"
            :price="`${crypto.USD} USD`"
         />
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import CryptoCard from '@/components/main/Buy/CryptoCard.vue' 
  import ArrowIcon from '@/components/icons/ArrowIcon.vue' 
  export default {
    name: 'Buy',
    components: {
      CryptoCard,
      ArrowIcon,
    },
    data(){
      return {
        cryptos: [],
        jsonData: '',
      }
    },
    mounted(){
      axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
      .then(response => {
        const data = response.data
        this.cryptos = data
        this.jsonData = JSON.stringify(data)
      })
      .catch(error => {
        console.log(error)
      })

    setInterval(() => {
      axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
      .then(response => {
        const data = response.data
        this.cryptos = data
      })
      .catch(error => {
        console.log(error)
      })
    }, 3000) // update every 3 seconds
    }
  }
</script>