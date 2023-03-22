<template>
  <div class="container">
    <div class="flex justify-between items-center h-full min-h-20 xs:min-h-16">
      <div class="">
        <router-link to="/entry" class="flex items-center group">
         <LogoIcon class="h-13.5 w-13.5 pr-2 transition duration-300 group-hover:fill-blue-50 group-hover:cursor-pointer"/>
          <span class="text-base font-semibold transition duration-300 group-hover:text-violet group-hover:cursor-pointer">Divine Exchange</span>
      </router-link>
      </div>
      <div class="md:bg-black md:h-screen md:bg-violet-dark md:w-full md:z-40 md:absolute md:inset-0 md:transform md:translate-x-full md:transition md:duration-500 md:ease-in-out"
      :class="{'relative !-translate-x-0' : open}"
      >
      <div class="flex justify-between py-5 px-5 h-full">
      <div class="md:basis-full md:text-center">
        <HeaderMenu/>
      </div>
      <div class="hidden md:flex md:items-start">
        <CloseBtn @click="close"/>
      </div>
      </div>
      </div>
      <div class="flex items-center xs:hidden">
        <router-link to="/signup">
          <SignInBtn class="mr-3">Sign in</SignInBtn>
        </router-link>
          <SignUpBtn>Sign up</SignUpBtn>
      </div>
      <div class="hidden md:flex">
        <BurgerBtn @button-clicked="toggle"/>
    </div>
    </div>
  </div>
</template>
<script>
import HeaderMenu from '@/components/header/HeaderMenu.vue'  
import SignInBtn from '@/components/buttons/SignInBtn.vue'  
import SignUpBtn from '@/components/buttons/SignUpBtn.vue'
import BurgerBtn from '@/components/buttons/BurgerBtn.vue'    
import LogoIcon from '@/components/icons/LogoIcon.vue'          
export default { 
  name: 'HeaderPart',
	components: { 
    HeaderMenu,
    SignInBtn,
    SignUpBtn,
    LogoIcon,
    BurgerBtn
	},
  data(){
    return {
      open: false,
    }
  },
  methods: {
    toggle(){
      this.open = !this.open;
      if(this.open){
        document.body.classList.add('overflow-hidden', 'fixed', 'left-0', 'right-0');
      }else {
        document.body.classList.remove('overflow-hidden', 'fixed', 'left-0', 'right-0');
      }
    },
    close(){
      this.open = !this.open;
    }
  }
}
</script>