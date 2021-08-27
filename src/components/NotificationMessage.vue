<template>
  <div :class="typeClass" class="alert">
    {{ notification.message }}
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      timeout: null,
    };
  },
  props: ["notification"],
  computed: {
    typeClass() {
      console.log(this.notification.type, "nani");
      return `alert-${this.notification.type}`;
    },
  },
  methods: {
    ...mapActions({ removeNotification: "removeNotification" }),
  },
  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timeout);
  },
};
</script>

<style>
.alert {
  background: #41b883;
  color: white;
  animation-name: swing;
  animation-duration: 1s;
  width: 16rem;
  padding: 2rem;
  text-align: center;
  margin: 1rem auto;
}
.alert-danger {
  background: #b61a1aef;
}
@keyframes swing {
  0% {
    padding: 0rem;
    transform: translateY(48px);
  }
  100% {
    padding: 2rem;
    transform: translateY(0px);
  }
}
</style>
