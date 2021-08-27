<template>
  <div id="editar">
    <div class="editar_input">
      <input
        id="name"
        class="controls"
        type="text"
        placeholder="Ingrese su name"
      />
      <input
        id="modelo"
        class="controls"
        type="text"
        placeholder="Ingrese su modelo"
      />
      <input
        id="telefono"
        class="controls"
        type="number"
        placeholder="Ingrese su telefono"
      />
      <input
        id="description"
        class="controls"
        type="text"
        placeholder="Ingrese su description"
      />
      <input
        id="precio"
        class="controls"
        type="number"
        placeholder="Ingrese su precio"
      />
      <select class="controls" id="contacts">
        <option value="BRYAN">bryan</option>
        <option value="YEGOR">yegor</option>
        <option value="KEVIN">kevin</option>
        <option value="OSCAR">oscar</option>
        <option value="KENDRY">kendry</option>
      </select>
      <select class="controls" id="urgencia">
        <option value="ALTA">Alta</option>
        <option value="MEDIA">Media</option>
        <option value="BAJA">Baja</option>
      </select>
      <button @Click="$emit('edit')" class="botons">
        {{ msg }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["edit"],
  props: {
    msg: {
      type: String,
      default: "Abrir Modal",
    },
  },
};
</script>

<style scoped>
.editar_input {
  margin: 10rem auto;
  width: 600px;
  background: red;
  display: flex;
  flex-direction: column;
}
</style>
