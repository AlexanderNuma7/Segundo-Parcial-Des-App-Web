<template>
  <div>
    <!-- NAVBAR PRINCIPAL -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand fw-bold">MotoStore 🏍️</span>

        <!-- BOTÓN HAMBURGUESA PARA MENÚ -->
        <button 
          class="navbar-toggler" 
          type="button" 
          @click="toggleMenu"
          style="border: 1px solid #e10600;"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- MENÚ SUPERIOR DERECHA -->
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <a @click="logout" class="nav-link text-danger" style="cursor:pointer;">
                🚪 Salir
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- MENÚ HAMBURGUESA DESPLEGABLE -->
    <nav v-if="menuOpen" class="navbar navbar-expand-lg navbar-dark bg-dark px-3 border-bottom" style="border-bottom: 2px solid #e10600 !important;">
      <ul class="navbar-nav w-100">
        <li class="nav-item mb-2">
          <router-link to="/dashboard/productos" class="nav-link" @click="closeMenu">
            🏍️ Motos
          </router-link>
        </li>
        <li class="nav-item mb-2">
          <router-link to="/dashboard/clientes" class="nav-link" @click="closeMenu">
            👤 Clientes
          </router-link>
        </li>
        <li class="nav-item mb-2">
          <router-link to="/dashboard/contacto" class="nav-link" @click="closeMenu">
            📞 Contacto
          </router-link>
        </li>
        <li class="nav-item mb-2">
          <router-link to="/dashboard/empresa" class="nav-link" @click="closeMenu">
            🏢 Empresa
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
    logout() {
      localStorage.removeItem("logueado")
      localStorage.removeItem("role")
      localStorage.removeItem("userName")
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #0f0f0f !important;
}

.navbar-brand,
.nav-link {
  color: #ffffff !important;
}

.nav-link:hover,
.nav-link:focus {
  color: #e10600 !important;
}

.nav-link.active {
  color: #e10600 !important;
  font-weight: 600;
}

.navbar-toggler {
  border-color: #e10600 !important;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.25rem rgba(225, 6, 0, 0.25) !important;
}
</style>