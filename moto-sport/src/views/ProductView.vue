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

        <img :src="p.image" class="card-img-top img-moto" @error="imagenFallback($event)" />

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

    <div v-if="modalVisible" class="modal-backdrop" @click.self="cerrarModal">
      <div class="modal-card shadow-lg">
        <div class="modal-header d-flex justify-content-between align-items-center">
          <div>
            <h5 class="modal-title mb-0">Detalle de la Moto</h5>
            <small class="text-muted">Información rápida</small>
          </div>
          <button type="button" class="btn-close" aria-label="Cerrar" @click="cerrarModal"></button>
        </div>
        <div class="modal-body">
          <img :src="modalProduct.image" alt="Imagen de la moto" class="img-fluid rounded mb-3" />
          <p class="mb-1"><strong>Nombre:</strong> {{ modalProduct.name }}</p>
          <p class="mb-1"><strong>Marca:</strong> {{ modalProduct.brand }}</p>
          <p class="mb-1"><strong>Cilindraje:</strong> {{ modalProduct.cc }}</p>
          <p class="mb-0"><strong>Precio:</strong> ${{ modalProduct.price }}</p>
        </div>
        <div class="modal-footer text-end">
          <button class="btn btn-secondary" @click="cerrarModal">Cerrar</button>
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
      editando: false,
      modalVisible: false,
      modalProduct: {
        name: "",
        brand: "",
        price: "",
        cc: "",
        image: ""
      }
    }
  },

  mounted() {
    this.cargarDatos()
  },

  methods: {
    cargarDatos() {
      const storage = localStorage.getItem("productos")

      if (storage) {
        try {
          const parsed = JSON.parse(storage)
          if (Array.isArray(parsed) && parsed.length > 0) {
            // Verificar si las imágenes tienen URLs válidas
            const hasValidImages = parsed.every(p => p.image && p.image.includes('placeholder.com'))
            if (hasValidImages) {
              this.productos = parsed
              return
            }
          }
        } catch (error) {
          // Ignorar y restaurar los datos por defecto
        }
      }

      this.productos = data
      localStorage.setItem("productos", JSON.stringify(data))
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
      this.modalProduct = { ...p }
      this.modalVisible = true
    },

    cerrarModal() {
      this.modalVisible = false
      this.modalProduct = {
        name: "",
        brand: "",
        price: "",
        cc: "",
        image: ""
      }
    },

    imagenFallback(event) {
      event.target.onerror = null
      event.target.src = 'https://via.placeholder.com/400x250?text=Imagen+no+disponible'
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
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: block;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.modal-card {
  width: min(95vw, 420px);
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  animation: fadeInUp 0.25s ease;
}

.modal-header,
.modal-footer {
  padding: 1rem 1.25rem;
}

.modal-body {
  padding: 0 1.25rem 1.25rem;
}

.modal-header {
  border-bottom: 1px solid #e9ecef;
}

.modal-footer {
  border-top: 1px solid #e9ecef;
}

.modal-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.btn-close {
  background: transparent;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
}

.btn-close::before {
  content: "×";
  color: #495057;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>