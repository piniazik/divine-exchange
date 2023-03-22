  <template>
            <div class="flex flex-wrap justify-between basis-full items-center h-full min-h-14 mt-4 first:mt-0 first:mb-4 mb-4 last-of-type:mb-0 sm:flex-col">
              <div class="text-violet-light">{{ name }}</div>
              <div class="text-green">{{ price }}</div>
              <div class="text-white flex items-center group"><a href="" class="pr-1.5 transition-all duration-500 group-hover:text-violet-dark">Trade Now</a><span class=""><ArrowIconTable class="stroke-white transition-all duration-500 group-hover:stroke-violet-dark"/></span></div>
            </div>
            <hr class="w-full text-black-light last:hidden">
  </template>
  <script>  
  import ArrowIconTable from '@/components/icons/ArrowIconTable.vue'
    export default {
      name: 'CryptoCard',
      components: {
        ArrowIconTable
      },
      props: {
        name: String,
        price: String,
      },
    }
  </script>