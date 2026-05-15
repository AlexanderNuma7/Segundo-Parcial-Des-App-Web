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
      <button v-if="!editando" @click="restablecer" class="btn btn-outline-primary ms-2">
        Restaurar catálogo
      </button>
      <button v-if="!editando" @click="limpiarCache" class="btn btn-outline-warning ms-2">
        Limpiar caché
      </button>
    </div>

    <!-- GALERÍA DE MOTOS -->
    <div class="d-flex flex-wrap justify-content-center gap-3">

      <div v-for="(p, i) in productos" :key="i" class="card shadow card-moto">

        <img :src="p.image" class="card-img-top img-moto" :alt="p.name" @error="imagenFallback($event)" />

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

    <div v-if="modalVisible" class="modal-backdrop" @click.self="cerrarModal">
      <div class="modal-card shadow-lg">
        <div class="modal-header d-flex justify-content-between align-items-center">
          <div>
            <h5 class="modal-title mb-0">Atención</h5>
            <small class="text-muted">Revisa los datos del formulario</small>
          </div>
          <button type="button" class="btn-close" aria-label="Cerrar" @click="cerrarModal"></button>
        </div>
        <div class="modal-body">
          <p class="mb-0">{{ modalMessage }}</p>
        </div>
        <div class="modal-footer text-end">
          <button class="btn btn-secondary" @click="cerrarModal">Cerrar</button>
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
      indiceEdicion: null,
      modalVisible: false,
      modalMessage: ''
    }
  },
  created() {
    this.cargarDatos()
  },
  methods: {
    cargarDatos() {
      const storage = localStorage.getItem('productos')
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
      localStorage.setItem('productos', JSON.stringify(data))
    },
    restablecer() {
      this.productos.splice(0, this.productos.length, ...JSON.parse(JSON.stringify(data)))
      localStorage.setItem('productos', JSON.stringify(this.productos))
      this.modalMessage = 'Catálogo restaurado con éxito.'
      this.modalVisible = true
    },
    limpiarCache() {
      localStorage.removeItem('productos')
      this.cargarDatos()
      this.modalMessage = 'Caché limpiado. Datos actualizados.'
      this.modalVisible = true
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
        this.modalMessage = 'Por favor completa todos los campos.'
        this.modalVisible = true
      }
    },
    editar(p, index) {
      this.nuevo = { ...p }
      this.editando = true
      this.indiceEdicion = index
    },
    cerrarModal() {
      this.modalVisible = false
      this.modalMessage = ''
    },
    imagenFallback(event) {
      event.target.onerror = null
      event.target.src = 'https://via.placeholder.com/400x250?text=Imagen+no+disponible'
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
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-bottom: 2px solid #f0f0f0;
  display: block;
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