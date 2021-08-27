<template>
  <a href="#miModal" class="nav-link">{{ msgAbrir }}</a>

  <div id="miModal" class="modal">
    <div class="modal-contenido">
      <section class="form-register">
        <div class="div_img">
          <h1>{{ msgAbrir }} trabajo</h1>
        </div>

        <input
          class="controls"
          v-model="article.name"
          type="email"
          placeholder="Ingrese su name"
        />
        <input
          class="controls"
          type="email"
          v-model="article.modelo"
          placeholder="Ingrese su modelo"
        />
        <input
          class="controls"
          type="number"
          v-model="article.telefono"
          placeholder="Ingrese su telefono"
        />
        <input
          class="controls"
          type="text"
          v-model="article.description"
          placeholder="Ingrese su description"
        />
        <input
          class="controls"
          type="number"
          v-model="article.precio"
          placeholder="Ingrese su precio"
        />
        <select v-model="article.trabajador" class="controls" id="contacts">
          <option value="BRYAN">bryan</option>
          <option value="YEGOR">yegor</option>
          <option value="KEVIN">kevin</option>
          <option value="OSCAR">oscar</option>
          <option value="KENDRY">kendry</option>
        </select>
        <select v-model="article.urgencia" class="controls" id="urgencia">
          <option value="ALTA">Alta</option>
          <option value="MEDIA">Media</option>
          <option value="BAJA">Baja</option>
        </select>
        <a id="cerrar" href="#"
          >
          <button @click="$emit('create-article', article)" class="botons">
            {{ msgAbrir }}
          </button>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "productos",
  emits: ["create-article"],
  data() {
    return {
      article: {
        name: "",
        description: "",
        telefono: "",
        precio: "",
        trabajador: "",
        urgencia: "",
      },
    };
  },
  unmounted() {
    console.log("unMounted");
  },
  props: {
    msgAbrir: {
      type: String,
      default: "Abrir Modal",
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div_img {
  font-size: 2rem;
}
.div_img img {
  width: 100%;
}
.form-register {
  width: 400px;
  background: #24303c;
  padding: 1rem 3rem;
  margin: auto;
  border-radius: 4px;
  font-family: "calibri";
  color: white;
  box-shadow: 7px 13px 37px #000;
}
.form-register h4 {
  font-size: 22px;
  margin-bottom: 20px;
}
.controls {
  width: 96%;
  background: #24303c;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px solid #1f53c5;
  font-family: "calibri";
  font-size: 18px;
  color: white;
}
.form-register p {
  height: 40px;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
}
.form-register a {
  color: white;
  text-decoration: none;
}
.form-register a:hover {
  color: white;
  text-decoration: underline;
}
.form-register .botons {
  width: 100%;
  background: #1f53c5;
  border: none;
  padding: 12px;
  color: white;
  margin: 16px 0;
  font-size: 16px;
}
.form-register .botons:hover {
  color: black;
  background: white;
}
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
