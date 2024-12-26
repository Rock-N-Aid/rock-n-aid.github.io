<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/flag-icons-master/flag-icons.min.css'
</script>

<template>
  <RouterView />
</template>

<script>

export default {
  created() {
    let hash = window.location.hash;

    // Check if the hash is not empty
    if (hash && hash.substring(2) != "") {
      // Remove the '#' character to get just the ID
      let id = hash.substring(2);
      // window.location = window.location.toString().replace(hash, "");
      
    }
  }
}

</script>