<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Apple App " />
    <HelloWorld msg="Logueate para continuar" />
    <HelloWorld msg="^" />
    <Btn />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Btn from "@/components/Btn.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Btn,
  },
};
</script>
