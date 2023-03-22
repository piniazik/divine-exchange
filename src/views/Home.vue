<template>
  <!--header-->
  <header>
    <HeaderArea/>
  </header>
  <!--main-->
  <main>
    <div class="bg-bg-access bg-no-repeat bg-auto bg-right-top">
    <!--crypto-->
    <CryptoPlatform/>
    <!--access-->
    <Access/>
    <!--buy-->
    <Buy/>
    <!--step-->
    <Step/>
    <!--receive-->
    <Receive/>
  </div>
  </main>
  <!--footer-->
  <footer>
    <FooterArea/>
  </footer>
</template>
<script>
import HeaderArea from '@/components/header/HeaderArea.vue'
import CryptoPlatform from '@/components/main/Crypto/CryptoPlatform.vue'
import Access from '@/components/main/Access/Access.vue'
import Buy from '@/components/main/Buy/Buy.vue'  
import Step from '@/components/main/Step/Step.vue'  
import Receive from '@/components/main/Receive/Receive.vue'
import FooterArea from '@/components/footer/FooterArea.vue'  
export default {
  name: 'Home',
	components: { 
		HeaderArea,
    CryptoPlatform,
    Access,
    Buy,
    Step,
    Receive,
    FooterArea
	},
}
</script>