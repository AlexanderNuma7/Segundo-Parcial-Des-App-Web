<template>
  <div class="container mt-4">
    <h3 class="mb-4">🏍️ Concesionario de Motos</h3>

    <!-- FORMULARIO -->
    <div class="card p-4 mb-4 shadow">
      <h5>{{ editando ? "Editar Moto" : "Agregar Moto" }}</h5>

      <input v-model="nuevo.name" class="form-control mb-2" placeholder="Nombre" />
      <input v-model="nuevo.brand" class="form-control mb-2" placeholder="Marca" />
      <input v-model="nuevo.price" type="number" class="form-control mb-2" placeholder="Precio" />
      <input v-model="nuevo.cc" type="number" class="form-control mb-2" placeholder="Cilindraje" />
      <input v-model="nuevo.image" class="form-control mb-2" placeholder="URL Imagen" />

      <button @click="agregar" class="btn btn-success">
        {{ editando ? "Actualizar" : "Agregar" }}
      </button>
      <button v-if="editando" @click="cancelar" class="btn btn-secondary ms-2">
        Cancelar
      </button>
    </div>

    <!-- GALERÍA DE MOTOS -->
    <div class="d-flex flex-wrap justify-content-center gap-3">

      <div v-for="(p, i) in productos" :key="i" class="card shadow card-moto">

        <img :src="p.image" class="card-img-top img-moto" :alt="p.name" />

        <div class="card-body text-center">
          <h5 class="fw-bold">{{ p.name }}</h5>

          <p><strong>Marca:</strong> {{ p.brand }}</p>
          <p><strong>CC:</strong> {{ p.cc }}</p>
          <p class="text-danger fw-bold fs-5">${{ p.price }}</p>

          <button @click="editar(p, i)" class="btn btn-primary btn-sm me-2">
            ✏️ Editar
          </button>

          <button @click="eliminar(i)" class="btn btn-danger btn-sm">
            🗑️ Eliminar
          </button>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import data from "../../public/data/products.json"

export default {
  data() {
    return { 
      productos: [], 
      nuevo: { name: '', brand: '', price: '', cc: '', image: '' },
      editando: false,
      indiceEdicion: null
    }
  },
  created() {
    this.cargarDatos()
  },
  methods: {
    cargarDatos() {
      const storage = localStorage.getItem('productos')
      if (storage) {
        this.productos = JSON.parse(storage)
      } else {
        this.productos = data
        localStorage.setItem('productos', JSON.stringify(data))
      }
    },
    agregar() {
      if (this.nuevo.name && this.nuevo.brand && this.nuevo.price && this.nuevo.cc && this.nuevo.image) {
        if (this.editando) {
          this.productos.splice(this.indiceEdicion, 1, { ...this.nuevo })
          this.editando = false
        } else {
          this.nuevo.id = Date.now()
          this.productos.push({ ...this.nuevo })
        }
        localStorage.setItem('productos', JSON.stringify(this.productos))
        this.nuevo = { name: '', brand: '', price: '', cc: '', image: '' }
        this.indiceEdicion = null
      } else {
        alert('Por favor completa todos los campos')
      }
    },
    editar(p, index) {
      this.nuevo = { ...p }
      this.editando = true
      this.indiceEdicion = index
    },
    cancelar() {
      this.nuevo = { name: '', brand: '', price: '', cc: '', image: '' }
      this.editando = false
      this.indiceEdicion = null
    },
    eliminar(index) {
      if (confirm('¿Estás seguro de que deseas eliminar esta moto?')) {
        this.productos.splice(index, 1)
        localStorage.setItem('productos', JSON.stringify(this.productos))
      }
    }
  }
}
</script>

<style scoped>
.card-moto {
  width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  border: none;
}

.card-moto:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.img-moto {
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #f0f0f0;
}

.card-body {
  padding: 1.25rem;
}

.card-body h5 {
  color: #222;
  margin-bottom: 0.75rem;
}

.card-body p {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.btn-sm {
  font-size: 0.875rem;
  padding: 0.4rem 0.8rem;
}
</style>