<template>
  <section class="form-register">
    <div class="div_img"><img src="../assets/logo.png" /></div>
    <h1>Login</h1>
    <input
      class="controls"
      type="email"
      name="correo"
      placeholder="Ingrese su Correo"
      v-model="user"
    />
    <input
      class="controls"
      type="password"
      name="correo"
      v-model="pass"
      placeholder="Ingrese su Contraseña"
    />
    <router-link to="/about">About</router-link>
    <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
    <button v-on:click="login" class="botons">Enviar</button>
    <p><a href="#">¿Ya tengo Cuenta?</a></p>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "formulario",
  data() {
    return {
      user: null,
      pass: null,
    };
  },
  methods: {
    async login() {
      const model = {
        email: this.user,
        password: this.pass,
      };
      await this.fetchAuth(model);
      this.user = "";
      this.pass = "";
    },
    ...mapActions({ fetchAuth: "users/auth" }),
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div_img {
  margin: 1rem auto;
  width: 7rem;
}
.div_img img {
  width: 100%;
}
.form-register {
  width: 360px;
  /* background: #24303c; */
  background: var(--bg-secondary);

  padding: 30px;
  margin: auto;
  margin-top: 10px;
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
  background: var(--bg-secondary);
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px solid #1f53c5;
  font-family: "calibri";
  font-size: 18px;
  color: var(--text-secondary);
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

/* Small screens */
@media only screen and (max-width: 600px) {
  .form-register {
    width: 260px;
  }
}
</style>
