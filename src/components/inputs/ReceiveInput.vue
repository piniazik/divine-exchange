<template>
  <div class="input w-76 h-14 flex items-center relative focus:ring-2 focus:ring-blue-500">
  <input type="text"
  placeholder="Email Address"
  class="bg-transparent px-5 rounded-la w-full"
  >
  <ArrowBtn>
    <ArrowIcon class="stroke-dark-gray"/>
  </ArrowBtn>
  </div>
</template>
<script>
  import ArrowIcon from '@/components/icons/ArrowIcon.vue'
  import ArrowBtn from '@/components/buttons/ArrowBtn.vue'
  export default {
    name: 'ReceiveInput',
    components: {
      ArrowBtn,
      ArrowIcon
    },
  }
</script>
