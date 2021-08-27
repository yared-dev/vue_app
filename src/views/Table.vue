<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <table
          id="example"
          class="table table-bordered  display nowrap"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th>Finish Job</th>
              <th>Cliente</th>
              <th>Modelo</th>
              <th>telefono</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Urgencia</th>
              <th>Trabajador</th>
              <th>Fecha</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(todo, indice) in datosPaginados" v-bind:key="indice++">
              <td>{{ indice }}</td>
              <td data-label="Cliente">{{ todo.name }}</td>
              <td data-label="modelo">{{ todo.modelo }}</td>
              <td data-label="telefono">{{ todo.telefono }}</td>
              <td data-label="precio">{{ todo.precio }}</td>
              <td data-label="description">{{ todo.description }}</td>
              <td data-label="urgencia">{{ todo.urgencia }}</td>
              <td data-label="trabajador">{{ todo.trabajador }}</td>
              <td data-label="createdAt">{{ todo.createdAt }}</td>
              <td>
                <button v-on:click="delet(todo.id)" class="botons">
                  Borrar
                </button>
                <button v-on:click="edit(todo, indice)" class="botons">
                  editar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="div_li">
          <li
            v-for="(pagina, indice) in totalPaginas()"
            v-on:click="getDataPagina(pagina)"
            v-bind:key="indice"
          >
            <a> {{ pagina }}</a>
          </li>
        </div>
        <div class="formulario">
          <Formulario msgAbrir="Crear" v-on:create-article="create($event)" />
        </div>
      </div>
    </div>
  </div>
  <Edit v-on:edit="editar()" />
</template>
<script>
import axios from "axios";
import Formulario from "@/components/Formulario.vue";
import Edit from "@/components/EditForm.vue";
import { mapActions } from "vuex";
export default {
  name: "tabla",
  components: {
    Formulario,
    Edit,
  },
  data() {
    return {
      todos: [],
      elementoPaginados: 10,
      datosPaginados: [],
      editId: {},
    };
  },
  mounted() {
    if (localStorage.getItem("yared_token")) {
      this.getTodos();
      console.log("mounted");
    } else {
      this.$router.push({ name: "formulario" });
    }
  },
  methods: {
    editar() {
      const { id, indice } = this.editId;

      const name = document.getElementById("name").value;
      const modelo = document.getElementById("modelo").value;
      const precio = document.getElementById("precio").value;
      const description = document.getElementById("description").value;
      const telefono = document.getElementById("telefono").value;

      const editar = document.getElementById("editar");
      editar.style.display = "none";

      const article = {
        name,
        modelo,
        telefono: parseInt(telefono),
        description,
        precio: parseInt(precio),
      };
      const token = localStorage.getItem("yared_token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const bodyParameters = {
        key: "value",
      };
      axios
        .put(
          "http://localhost:3000/post/" + id,
          article,
          config,
          bodyParameters
        )
        .then(() => {
          this.datosPaginados[indice - 1].name = name;
          this.datosPaginados[indice - 1].modelo = modelo;
          this.datosPaginados[indice - 1].precio = precio;
          this.datosPaginados[indice - 1].description = description;
          this.datosPaginados[indice - 1].telefono = telefono;
          this.addNotification({ type: "succes", message: "trabajo Editado" });
        })
        .catch((e) => {
          this.addNotification({
            type: "danger",
            message: "trabajo No Editado",
          });
          console.log(e);
        });
    },
    getTodos() {
      console.log("numero depeti");
      axios
        .get("http://localhost:3000/post")
        .then((response) => {
          this.todos = Object.assign(response.data.data);
          this.getDataPagina(1);
        })
        .catch((e) => console.log(e));
    },
    delet(id) {
      const token = localStorage.getItem("yared_token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const bodyParameters = {
        key: "value",
      };
      axios
        .delete("http://localhost:3000/post/" + id, config, bodyParameters)
        .then((res) => {
          console.log(res);
          const todo = this.todos.filter((e) => e.id !== id);
          this.todos = todo;
          this.datosPaginados = this.todos;
          this.getDataPagina(1);
          this.addNotification({ type: "succes", message: "trabajo borrado" });
        })
        .catch((e) => {
          console.log(e);
          this.addNotification({
            type: "danger",
            message: "trabajo NO borrado",
          });
        });
    },
    create(article) {
      const art = {
        name: article.name,
        modelo: article.modelo,
        telefono: parseInt(article.telefono),
        description: article.description,
        precio: parseInt(article.precio),
        trabajador: article.trabajador,
        urgencia: article.urgencia,
        status: true,
      };
      const access_token = localStorage.getItem("yared_token");
      let config = {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      };
      axios
        .post("http://localhost:3000/post", art, config)
        .then((response) => {
          this.todos.push(response.data.data);
          console.log(this.todos);
          this.getDataPagina(1);
          document.getElementById("cerrar").setAttribute("href", "#");
          this.addNotification({ type: "succes", message: "Trabajo Creado" });
        })
        .catch((e) => {
          this.addNotification({
            type: "danger",
            message: "Trabajo No Creado",
          });
          document.getElementById("cerrar").setAttribute("href", "#");
          console.log(e.request.responseText);
        });
    },
    edit(todo, indice) {
      this.editId = todo;
      this.editId.indice = indice;
      const { name, modelo, description, telefono, precio } = this.editId;
      document.getElementById("name").value = name;
      document.getElementById("modelo").value = modelo;
      document.getElementById("precio").value = precio;
      document.getElementById("description").value = description;
      document.getElementById("telefono").value = telefono;
      const editar = document.getElementById("editar");
      editar.style.display = "block";
    },
    totalPaginas() {
      return Math.ceil(this.todos.length / this.elementoPaginados);
    },
    getDataPagina(elemento) {
      this.datosPaginados = [];
      const ini = elemento * this.elementoPaginados - this.elementoPaginados;
      const fin = elemento * this.elementoPaginados;
      this.datosPaginados = this.todos.slice(ini, fin);
    },
    ...mapActions({ addNotification: "addNotification" }),
  },
};
</script>
<style scoped>
.formulario {
  width: 72px;
}
.row {
  margin: 1rem 3rem;
}
table {
  border-spacing: 0px 0.5em;
}
table thead {
  background: var(--text-secondary);
  color: #857171;
}
table thead tr th {
  padding: 2rem 0.5em;
  text-align: left;
}
tr td {
  color: var(--text-secondary);
  background: var(--bg-primary);
  padding: 1rem 0.5em;
  text-align: left;
}
tr:hover td {
  background: var(--text-secondary);

  color: var(--text-primray);
}
.table-bordered tbody tr {
  margin-bottom: 1px;
  box-shadow: 7px 7px 4px 2px rgb(0 0 0 / 10%);
}
.table-bordered tfoot tr th {
  padding: 2rem 0.5em;
}
.div_li {
  display: flex;
  max-width: 100%;
}
.div_li li {
  list-style: none;
  padding: 0.5rem 0;
  width: 46px;
  background: var(--text-secondary);
  margin-left: 2rem;
  color: var(--bg-primary);
}
#editar {
  display: none;
  height: 100%;
  width: 100%;
  position: absolute;
  background: #000000a3;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

@media (max-width: 768px) {
  .table thead {
    display: none;
  }
  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 100%;
  }
  .table tr {
    margin-bottom: 1rem;
  }
  .table tbody tr td {
    text-align: right;
    padding-left: 50%;
    position: relative;
  }
  .table td:before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 1rem;
    font-weight: 600;
    font-size: 1rem;
    text-align: left;
  }
}
</style>
