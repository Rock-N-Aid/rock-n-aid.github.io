<script setup>
  import Nav from '@/components/Nav.vue'
  import Translate from '@/components/utils/Translate.vue';
  import Masthead from '@/components/sections/masthead.vue';
  import LogosBreak from '@/components/sections/logosbreak.vue';
  import Contact from '@/components/sections/contact.vue';
  import Footer from '@/components/sections/footer.vue';
  import Partners from '@/components/sections/partners.vue';
  

</script>


<template>
        <span id = "page-top"></span>
        <Nav />
      

        <!-- Bands-->
        <Partners />


        <a href="/public/assets/Regulamin_wydarzenia_Rock_N_Aid_2025.pdf">ddddddddddddddddd</a>

        <!-- LogosBreak-->
        <!-- <LogosBreak /> -->
        
        <!-- Contact-->
        <!-- <Contact /> -->

        <!-- Footer-->
        <Footer />

</template>

<script>

export default {
  mounted() {
    // this.$router.push('partners')
    this.$router.push('/assets/Regulamin_wydarzenia_Rock_N_Aid_2025.pdf')
  }
}

</script>