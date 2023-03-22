<template>
      <button class="relative group" @click="handleClick">
        <div class="relative z-50 flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all">
          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div class="bg-white h-[2px] w-7 transform transition-all duration-300" :class="{ 'origin-left group-focus:rotate-[42deg]' : isClicked }"></div>
            <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300" :class="{ 'group-focus:-translate-x-10' : isClicked }"></div>
            <div class="bg-white h-[2px] w-7 transform transition-all duration-300" :class="{ 'origin-left group-focus:-rotate-[42deg]' : isClicked }"></div>
          </div>
        </div>
      </button>
</template>
<script>
  export default {
    name: 'BurgerBtn',
    data(){
      return {
        isClicked: false,
      };
    },
    methods: {
      handleClick(){
        this.isClicked = !this.isClicked;
        this.$emit('button-clicked');
      }
    }
  }
</script>