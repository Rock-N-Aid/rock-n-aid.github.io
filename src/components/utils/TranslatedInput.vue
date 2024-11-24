<script setup>
// import { getStore } from '@/assets/store.js'
import { getStore } from '@/assets/js/store.js'
const store = getStore()
// store.$patch({ releasesHTML: "" })
// import EventHandler from '@/assets/EventHandler';

</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    pl: String,
    en: String
  },
  mounted() {
    let store = getStore()
    const input = this.$el.querySelector('input');
    if (input) {
      input.placeholder = store.lang == 0 ? this.en : this.pl;
    } else {
      const textarea = this.$el.querySelector('textarea');
      textarea.placeholder = store.lang == 0 ? this.en : this.pl;
    }
  }
}
</script>