<template>
  <div>

    <!-- NAVBAR -->
    <NavbarMenu />

    <!-- CONTENIDO -->
    <div class="container mt-4">

      <!-- BIENVENIDA -->
      <div class="p-5 mb-4 bg-dark text-white rounded">
        <h1 class="display-5">Bienvenido al panel de MotoStore</h1>
        <p class="lead">
          Administra tu inventario de motos de forma rápida y sencilla.
        </p>
        <router-link to="/dashboard/productos" class="btn btn-danger">
          Ver Motos
        </router-link>
      </div>

      <!-- INFO -->
      <div class="row text-center">
        <div class="col-md-4">
          <h4>🏍️ Inventario</h4>
          <p>Gestiona todas las motos disponibles.</p>
        </div>

        <div class="col-md-4">
          <h4>💰 Ventas</h4>
          <p>Controla precios y productos fácilmente.</p>
        </div>

        <div class="col-md-4">
          <h4>⚙️ Administración</h4>
          <p>Panel simple y eficiente para tu negocio.</p>
        </div>
      </div>

      <!-- VISTAS HIJAS -->
      <router-view />

    </div>

  </div>
</template>

<script>
import NavbarMenu from "../components/NavbarMenu.vue"

export default {
  components: {
    NavbarMenu
  }
}
</script>