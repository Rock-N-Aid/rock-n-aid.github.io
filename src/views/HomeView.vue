<script setup>
  import Nav from '@/components/Nav.vue'
  import Translate from '@/components/utils/Translate.vue';
  import Masthead from '@/components/sections/masthead.vue';
  import About from '@/components/sections/about.vue';
  import Goals from '@/components/sections/goals.vue';
  import Bands from '@/components/sections/bands.vue';
  import BandsPopUps from '@/components/sections/bandsPopUps.vue';
  import Founders from '@/components/sections/founders.vue';
  import LogosBreak from '@/components/sections/logosbreak.vue';
  import Contact from '@/components/sections/contact.vue';
  import Footer from '@/components/sections/footer.vue';
  

</script>


<template>
        <span id = "page-top"></span>
        <Nav />
        
        <!-- Masthead-->
        <Masthead />

        <!-- Goals-->
        <Goals />

        <!-- Bands-->
        <Bands />

        <!-- About-->
        <About/>

        <!-- Founders-->
        <Founders />

        <!-- LogosBreak-->
        <LogosBreak />
        
        <!-- Contact-->
        <Contact />

        <!-- Footer-->
        <Footer />

        <!-- Bands PopUps-->
        <BandsPopUps />

</template>
