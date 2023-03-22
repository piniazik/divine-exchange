<template>
  <div class="pt-35 pb-35">
    <div class="container">
    <div class="text-center">
      <h2 class="text-xlg text-white font-black pb-4 md:text-[35px]">Receive transmissions</h2>
      <p class="text-base_s text-white font-normal pb-8"><span class="text-base_s text-gray font-normal">Unsubscribe at any time.</span> Privacy policy↗</p>
      <ReceiveInput class="mx-auto"/>
    </div>
  </div>
  </div>
</template>
<script>
  import ReceiveInput from '@/components/inputs/ReceiveInput.vue'
  export default {
    name: 'Receive',
    components: {
      ReceiveInput
    },
  }
</script>