<template>
  <input
    type="checkbox"
    v-bind:checked="checked"
    v-on:change="$emit('change', $event.target.checked)"
  />
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    checked: Boolean,
  },
};
</script>

<style scoped>
.modal-contenido {
  margin: 2% auto;
  position: relative;
}
.modal {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: all 1s;
}
#miModal:target {
  opacity: 1;
  pointer-events: auto;
}
</style>
