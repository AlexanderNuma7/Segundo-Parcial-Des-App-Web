<template>
  <aside class="bg-light border rounded p-3 h-100">
    <h5 class="mb-3">Panel lateral</h5>
    <ul class="nav flex-column mb-3">
      <li class="nav-item mb-2">
        <router-link to="/dashboard" class="nav-link text-dark" exact-active-class="active">
          🏠 Inicio
        </router-link>
      </li>
      <li class="nav-item mb-2">
        <router-link to="/dashboard/productos" class="nav-link text-dark" active-class="active">
          🏍️ Motos
        </router-link>
      </li>
      <li class="nav-item mb-2">
        <router-link to="/dashboard/clientes" class="nav-link text-dark" active-class="active">
          👤 Clientes
        </router-link>
      </li>
    </ul>

    <div class="mb-2 text-uppercase text-secondary small">Información</div>
    <ul class="nav flex-column mb-3">
      <li class="nav-item mb-2">
        <router-link to="/dashboard/contacto" class="nav-link text-dark" active-class="active">
          📞 Contacto
        </router-link>
      </li>
      <li class="nav-item mb-2">
        <router-link to="/dashboard/empresa" class="nav-link text-dark" active-class="active">
          🏢 Empresa
        </router-link>
      </li>
    </ul>

    <ul class="nav flex-column">
      <li class="nav-item mt-3 pt-3 border-top">
        <a @click.prevent="logout" class="nav-link text-danger" style="cursor: pointer;">
          🚪 Cerrar sesión
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('logueado')
      localStorage.removeItem('role')
      localStorage.removeItem('userName')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.nav-link.active {
  font-weight: 600;
  color: #e10600 !important;
}
</style>
