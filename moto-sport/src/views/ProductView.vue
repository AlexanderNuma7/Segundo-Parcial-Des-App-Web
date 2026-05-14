<template>
  <div class="container mt-4">
    <h3>Gestión de Motos 🏍️</h3>

    <!-- FORMULARIO -->
    <div class="mb-3 p-3 border rounded bg-light">
      <input v-model="nuevo.name" class="form-control mb-2" placeholder="Nombre" />
      <input v-model="nuevo.brand" class="form-control mb-2" placeholder="Marca" />
      <input v-model="nuevo.price" type="number" class="form-control mb-2" placeholder="Precio" />
      <input v-model="nuevo.cc" type="number" class="form-control mb-2" placeholder="Cilindraje (cc)" />
      <input v-model="nuevo.image" class="form-control mb-2" placeholder="URL Imagen" />

      <button class="btn btn-success" @click="agregar">
        {{ editando ? "Actualizar Moto" : "Agregar Moto" }}
      </button>
    </div>

    <!-- CARDS -->
    <div class="d-flex flex-wrap justify-content-around">
      <div v-for="m in motos" :key="m.id" class="card m-3" style="width: 18rem;">
        
        <img :src="m.image" class="card-img-top" style="height:200px; object-fit:cover;" />

        <div class="card-body">
          <h5 class="card-title fw-bold">{{ m.name }}</h5>

          <p><strong>Marca:</strong> {{ m.brand }}</p>
          <p><strong>Cilindraje:</strong> {{ m.cc }} cc</p>
          <p><strong>Precio:</strong> ${{ m.price }}</p>

          <button @click="editar(m)" class="btn btn-primary btn-sm me-2">
            Editar
          </button>

          <button @click="eliminar(m.id)" class="btn btn-danger btn-sm">
            Eliminar
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      motos: [],
      nuevo: {
        id: null,
        name: "",
        brand: "",
        price: "",
        cc: "",
        image: ""
      },
      editando: false
    }
  },

  mounted() {
    this.cargar()
  },

  methods: {
    cargar() {
      const data = localStorage.getItem("motos")
      this.motos = data ? JSON.parse(data) : []
    },

    agregar() {
      if (this.editando) {
        const index = this.motos.findIndex(m => m.id === this.nuevo.id)
        this.motos[index] = { ...this.nuevo }
        this.editando = false
      } else {
        this.nuevo.id = Date.now()
        this.motos.push({ ...this.nuevo })
      }

      localStorage.setItem("motos", JSON.stringify(this.motos))
      this.reset()
    },

    editar(m) {
      this.nuevo = { ...m }
      this.editando = true
    },

    eliminar(id) {
      this.motos = this.motos.filter(m => m.id !== id)
      localStorage.setItem("motos", JSON.stringify(this.motos))
    },

    reset() {
      this.nuevo = {
        id: null,
        name: "",
        brand: "",
        price: "",
        cc: "",
        image: ""
      }
    }
  }
}
</script>