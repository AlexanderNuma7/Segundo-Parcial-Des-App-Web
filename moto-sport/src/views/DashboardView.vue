<template>
  <div>

    <!-- NAVBAR -->
    <NavbarMenu />

    <div class="container-fluid mt-4">
      <div class="row">
        <aside class="col-md-3 mb-4">
          <SidebarComponent />
        </aside>

        <main class="col-md-9">
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
          <div class="row text-center mb-4">
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
        </main>
      </div>
    </div>

  </div>
</template>

<script>
import NavbarMenu from "../components/NavbarMenu.vue"
import SidebarComponent from "../components/SidebarComponent.vue"

export default {
  components: {
    NavbarMenu,
    SidebarComponent
  }
}
</script>