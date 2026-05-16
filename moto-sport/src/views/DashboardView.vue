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

          <div class="p-4 mb-4 bg-secondary text-white rounded">
            <h2>Sobre MotoStore</h2>
            <p>
              Somos una concesionaria dedicada a ofrecer las mejores motos con un servicio ágil y confiable.
              Con nosotros encontrarás modelos exclusivos, atención personalizada y un equipo comprometido con tu satisfacción.
            </p>
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