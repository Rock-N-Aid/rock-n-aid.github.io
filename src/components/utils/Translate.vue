<script setup>
// import { getStore } from '@/assets/store.js'

import { getStore } from '@/assets/js/store.js'
const store = getStore()
// store.$patch({ releasesHTML: "" })
// import EventHandler from '@/assets/EventHandler';
</script>

<template>     
  {{ store.lang == 0 ? en : pl }}
  <slot name = "en" v-if = "store.lang == 0"></slot>
  <slot name = "pl" v-else></slot>
</template>
<script>
export default {

  data() {
    return {
      
    };
  },


  created() {
    
  },

  props: {
    pl: {
        type: String,
        default: ""
    },
    en: {
        type: String,
        default: ""
    },
  }

}

</script>