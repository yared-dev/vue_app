<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Modal v-model="lovingVue" />
    <h1>No mames{{ pos }}</h1>
  </div>
</template>

<script>
import Modal from "@/components/modal.vue";

export default {
  name: "Home",
  data() {
    return {
      lovingVue: true,
    };
  },
  components: {
    Modal,
  },
  computed: {
    pos() {
      return this.lovingVue;
    },
  },
};
</script>
