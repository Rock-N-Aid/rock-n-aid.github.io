<script setup>
  import axios from 'axios';
  import EventHandler from '@/assets/js/EventHandler';
</script>

<template>
  <form @submit.prevent="submitted">
    <slot></slot>
  </form>
</template>

<script>
export default {


  data() {
    return {
      data: {}
    };
  },
  methods: {
    async makeRequest(file) {
      console.warn("SENDING: " + JSON.stringify(this.model))
      this.$emit("sent");
      try {
        const response = await axios.post(file, this.model);
        this.$emit("formResponse", {success: true, data: response.data})
        EventHandler.emit("formResponse", {success: true, data: response.data})
      } catch (error) {
        this.$emit("formResponse", {success: false, error: error})
        EventHandler.emit("formResponse", {success: false, error: error})
      }
    },

    submitted() {
      this.makeRequest(this.action)
    }
  },

  created() {

  },

  props: {
    action: {
        type: String,
        default: ""
    },
    model: {
        type: Object,
        default: {}
    },
  }

}

</script>