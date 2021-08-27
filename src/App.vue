<template>
  <Nav />
  <router-view />
  <NotificationList />
</template>
<script>
import Nav from "@/components/Nav.vue";
import NotificationList from "@/components/NotificationList";
export default {
  components: {
    Nav,
    NotificationList,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
:root {
  font-size: 16px;
  font-family: "Open Sans";
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #303035;
  --bg-secondary: #141418;
  --transition-speed: 800ms;
}

body {
  color: black;
  background-color: var(--bg-primary);
  margin: 0;
  padding: 0;
}

body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: #6649b8;
}
</style>
