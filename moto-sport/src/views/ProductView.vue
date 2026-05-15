<template>
  <div class="container mt-4">
    <h3 class="mb-4">Catálogo de Motos 🏍️</h3>

    <!-- FORMULARIO -->
    <div class="card p-3 mb-4 shadow">
      <h5>{{ editando ? "Editar Moto" : "Agregar Moto" }}</h5>

      <input v-model="producto.name" class="form-control mb-2" placeholder="Nombre" />
      <input v-model="producto.brand" class="form-control mb-2" placeholder="Marca" />
      <input v-model="producto.price" type="number" class="form-control mb-2" placeholder="Precio" />
      <input v-model="producto.cc" type="number" class="form-control mb-2" placeholder="Cilindraje" />
      <input v-model="producto.image" class="form-control mb-2" placeholder="URL Imagen" />

      <button @click="guardar" class="btn btn-success">
        {{ editando ? "Actualizar" : "Agregar" }}
      </button>
    </div>

    <!-- CARDS -->
    <div class="d-flex flex-wrap justify-content-center">

      <div v-for="p in productos" :key="p.id" class="card m-3 shadow card-moto">

        <img :src="p.image" class="card-img-top img-moto" />

        <div class="card-body text-center">
          <h5 class="fw-bold">{{ p.name }}</h5>

          <p><strong>Marca:</strong> {{ p.brand }}</p>
          <p><strong>CC:</strong> {{ p.cc }}</p>
          <p class="text-danger fw-bold">${{ p.price }}</p>

          <button @click="editar(p)" class="btn btn-primary btn-sm me-2">
            ✏️
          </button>

          <button @click="eliminar(p.id)" class="btn btn-danger btn-sm me-2">
            🗑️
          </button>

          <button @click="ver(p)" class="btn btn-dark btn-sm">
            👁️
          </button>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import data from "../data/products.json"

export default {
  data() {
    return {
      productos: [],
      producto: {
        id: null,
        name: "",
        brand: "",
        price: "",
        cc: ""
      },
      editando: false
    }
  },

  mounted() {
    this.cargarDatos()
  },

  methods: {
    cargarDatos() {
      const storage = localStorage.getItem("productos")

      if (storage) {
        this.productos = JSON.parse(storage)
      } else {
        this.productos = data
        localStorage.setItem("productos", JSON.stringify(data))
      }
    },

    guardar() {
      if (this.editando) {
        const index = this.productos.findIndex(p => p.id === this.producto.id)
        this.productos[index] = { ...this.producto }
        this.editando = false
      } else {
        this.producto.id = Date.now()
        this.productos.push({ ...this.producto })
      }

      localStorage.setItem("productos", JSON.stringify(this.productos))
      this.reset()
    },

    editar(p) {
      this.producto = { ...p }
      this.editando = true
    },

    eliminar(id) {
      this.productos = this.productos.filter(p => p.id !== id)
      localStorage.setItem("productos", JSON.stringify(this.productos))
    },

    ver(p) {
      alert(`Moto: ${p.name}\nMarca: ${p.brand}\nPrecio: $${p.price}`)
    },

    reset() {
      this.producto = {
        id: null,
        name: "",
        brand: "",
        price: "",
        cc: ""
      }
    }
  }
}
</script>

<style scoped>
.card-moto {
  width: 260px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10px;
}

.card-moto:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.img-moto {
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>