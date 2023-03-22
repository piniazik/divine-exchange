<template>
  <div class="flex lg:flex-wrap">
    <div class="basis-2/4 relative overflow-hidden h-screen lg:basis-full lg:order-2 xs:overflow-auto xs-h[65vh]">
      <img src="../assets/images/signup-img.png" alt="crypto" class="w-full absolute top-20 lg:top-[18rem] xs:top-auto xs:bottom-0">
    </div>
    <div class="basis-2/4 flex flex-col justify-center lg:basis-full lg:items-center">
      <div class="pb-[56px] lg:pt-9">
        <router-link to="/entry" class="flex items-center group">
         <LogoIcon class="h-13.5 w-13.5 pr-2 transition duration-300 group-hover:fill-blue-50 group-hover:cursor-pointer"/>
          <span class="text-base font-semibold transition duration-300 group-hover:text-violet group-hover:cursor-pointer">Divine Exchange</span>
      </router-link>
      </div>
      <div class="">
      <form action="/">
            <FormInput label="Email" id="email" v-model="form.email" type="email" required />
            <FormInput label="Password" id="password" v-model="form.password" type="password" required />
            <FormInput label="Confirm Password" id="confirm-password" v-model="form.confirmPassword" type="password" required />
            <div class="pt-8">
            <GetStartedBtn
            class="xs:w-full" 
            :height="btnHeight"
            :paddingLeft="paddingLeftBtn"
            :paddingRight="paddingRightBtn"
            :paddingTop="paddingTopBtn"
            :paddingBottom="paddingBottomBtn"
            >
              Sign up
            </GetStartedBtn>
            </div>
      </form>
    </div>
    </div>
  </div>
</template>
<script>
import GetStartedBtn from '@/components/buttons/GetStartedBtn.vue'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import FormInput from '@/components/inputs/FormInput.vue'      
export default { 
  name: 'Signup',
	components: { 
    GetStartedBtn,
    LogoIcon,
    FormInput
	},
  data(){
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      btnHeight: '2.5rem',
      paddingLeftBtn: '1.1875rem',
      paddingRightBtn: '1.1875rem',
      paddingTopBtn: '0.75rem',
      paddingBottomBtn: '0.75rem',
    }
  },
  methods: {

  }
}
</script>