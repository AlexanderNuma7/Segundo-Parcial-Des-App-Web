<template>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand fw-bold">MotoStore 🏍️</span>

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
    </nav>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">

    <ul class="navbar-nav ms-auto">
      
      <li class="nav-item">
        <router-link to="/dashboard/productos" class="nav-link">
          🏍️ Motos
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/dashboard/clientes" class="nav-link">
          👤 Clientes
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
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
</style>