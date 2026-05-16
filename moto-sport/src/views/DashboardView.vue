<template>
  <div>

    <!-- NAVBAR -->
    <NavbarMenu />

    <div class="container-fluid mt-4">
      <div class="row">
        <!-- BOTÓN HAMBURGUESA PARA SIDEBAR -->
        <div class="col-12 mb-3">
          <button 
            class="btn btn-danger fw-bold" 
            @click="toggleSidebar"
            style="font-size: 18px;"
          >
            ☰ Menú
          </button>
        </div>
      </div>

      <div class="row">
        <!-- SIDEBAR COLAPSABLE -->
        <aside v-show="showSidebar" class="col-md-3 mb-4">
          <SidebarComponent />
        </aside>

        <!-- MAIN CONTENT -->
        <main :class="showSidebar ? 'col-md-9' : 'col-md-12'">
          <!-- INFORMACIÓN DE LA EMPRESA - SOLO EN INICIO -->
          <div v-if="isMainDashboard" class="mb-4">
            <!-- WELCOME HERO -->
            <div class="mb-4 p-5 rounded" style="background: linear-gradient(120deg, #1c1c1c 0%, #0f0f0f 100%); border: 2px solid #e10600;">
              <div class="row align-items-center">
                <div class="col-md-8">
                  <h1 class="display-5 fw-bold mb-3" style="color: #fff;">¡Bienvenido a MotoStore! 🏍️</h1>
                  <p class="lead mb-4">Descubre las mejores motocicletas de la región con garantía, asesoría profesional y precios imbatibles.</p>
                  <div class="d-flex gap-2">
                    <router-link to="/dashboard/productos" class="btn btn-danger fw-bold">
                      Explorar Catálogo
                    </router-link>
                    <router-link to="/dashboard/contacto" class="btn btn-outline-danger fw-bold">
                      Contáctanos
                    </router-link>
                  </div>
                </div>
                <div class="col-md-4 text-center">
                  <span style="font-size: 120px;">🏎️</span>
                </div>
              </div>
            </div>

            <!-- CATEGORÍAS DE MOTOS -->
            <h4 style="color: #ff3b3b;" class="fw-bold mb-3">🔥 Tipos de Motos</h4>
            <div class="row mb-4">
              <div class="col-md-3 mb-3">
                <div class="card text-center h-100" style="background-color: #1c1c1c; border: 1px solid #444; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.borderColor='#e10600'; this.style.transform='translateY(-5px)'" onmouseout="this.style.borderColor='#444'; this.style.transform='translateY(0)'">
                  <div class="card-body">
                    <h3>🏍️</h3>
                    <h6 class="fw-bold">Deportivas</h6>
                    <p class="small text-muted">Velocidad y rendimiento</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card text-center h-100" style="background-color: #1c1c1c; border: 1px solid #444; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.borderColor='#e10600'; this.style.transform='translateY(-5px)'" onmouseout="this.style.borderColor='#444'; this.style.transform='translateY(0)'">
                  <div class="card-body">
                    <h3>🛵</h3>
                    <h6 class="fw-bold">Cruiser</h6>
                    <p class="small text-muted">Comodidad y estilo</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card text-center h-100" style="background-color: #1c1c1c; border: 1px solid #444; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.borderColor='#e10600'; this.style.transform='translateY(-5px)'" onmouseout="this.style.borderColor='#444'; this.style.transform='translateY(0)'">
                  <div class="card-body">
                    <h3>🗺️</h3>
                    <h6 class="fw-bold">Touring</h6>
                    <p class="small text-muted">Aventura y viajes</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card text-center h-100" style="background-color: #1c1c1c; border: 1px solid #444; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.borderColor='#e10600'; this.style.transform='translateY(-5px)'" onmouseout="this.style.borderColor='#444'; this.style.transform='translateY(0)'">
                  <div class="card-body">
                    <h3>🛣️</h3>
                    <h6 class="fw-bold">Street</h6>
                    <p class="small text-muted">Urbanas y prácticas</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- CARACTERÍSTICAS DE SERVICIO -->
            <h4 style="color: #ff3b3b;" class="fw-bold mb-3">✨ Nuestro Servicio</h4>
            <div class="row mb-4">
              <div class="col-md-4 mb-3">
                <div class="card h-100" style="background-color: #1c1c1c; border-top: 3px solid #e10600;">
                  <div class="card-body">
                    <h3 style="color: #ff3b3b; font-size: 32px;">🔍</h3>
                    <h6 class="fw-bold mt-2">Búsqueda Inteligente</h6>
                    <p class="small">Encuentra la moto perfecta según tus necesidades y presupuesto</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="card h-100" style="background-color: #1c1c1c; border-top: 3px solid #e10600;">
                  <div class="card-body">
                    <h3 style="color: #ff3b3b; font-size: 32px;">💳</h3>
                    <h6 class="fw-bold mt-2">Compra Segura</h6>
                    <p class="small">Transacciones protegidas con múltiples opciones de pago</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="card h-100" style="background-color: #1c1c1c; border-top: 3px solid #e10600;">
                  <div class="card-body">
                    <h3 style="color: #ff3b3b; font-size: 32px;">👨‍💼</h3>
                    <h6 class="fw-bold mt-2">Soporte 24/7</h6>
                    <p class="small">Equipo disponible para resolver todas tus dudas</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- TESTIMONIOS -->
            <h4 style="color: #ff3b3b;" class="fw-bold mb-3">⭐ Lo que dicen nuestros clientes</h4>
            <div class="row mb-4">
              <div class="col-md-4 mb-3">
                <div class="card" style="background-color: #1c1c1c; border: 1px solid #444;">
                  <div class="card-body">
                    <div class="mb-2">⭐⭐⭐⭐⭐</div>
                    <p class="small mb-3">"Excelente servicio, encontré exactamente la moto que buscaba. Muy profesionales!"</p>
                    <small class="text-muted">- Juan García</small>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="card" style="background-color: #1c1c1c; border: 1px solid #444;">
                  <div class="card-body">
                    <div class="mb-2">⭐⭐⭐⭐⭐</div>
                    <p class="small mb-3">"Precios muy competitivos y entrega rápida. Recomiendo 100%!"</p>
                    <small class="text-muted">- María López</small>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="card" style="background-color: #1c1c1c; border: 1px solid #444;">
                  <div class="card-body">
                    <div class="mb-2">⭐⭐⭐⭐⭐</div>
                    <p class="small mb-3">"Asesoría personalizada impecable. Volveré a comprar aquí!"</p>
                    <small class="text-muted">- Carlos Rodríguez</small>
                  </div>
                </div>
              </div>
            </div>

            <!-- PROCESO DE COMPRA SIMPLE -->
            <h4 style="color: #ff3b3b;" class="fw-bold mb-3">📋 Proceso de Compra - Muy Simple</h4>
            <div class="mb-4">
              <div class="row">
                <div class="col-md-3 mb-2">
                  <div class="d-flex align-items-center">
                    <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white" style="width: 50px; height: 50px; background-color: #e10600; font-size: 24px; flex-shrink: 0;">1</div>
                    <div class="ms-3">
                      <h6 class="fw-bold mb-0">Explora</h6>
                      <small class="text-muted">Navega nuestro catálogo</small>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 mb-2">
                  <div class="d-flex align-items-center">
                    <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white" style="width: 50px; height: 50px; background-color: #e10600; font-size: 24px; flex-shrink: 0;">2</div>
                    <div class="ms-3">
                      <h6 class="fw-bold mb-0">Selecciona</h6>
                      <small class="text-muted">Elige tu moto</small>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 mb-2">
                  <div class="d-flex align-items-center">
                    <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white" style="width: 50px; height: 50px; background-color: #e10600; font-size: 24px; flex-shrink: 0;">3</div>
                    <div class="ms-3">
                      <h6 class="fw-bold mb-0">Compra</h6>
                      <small class="text-muted">Realiza el pago</small>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 mb-2">
                  <div class="d-flex align-items-center">
                    <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white" style="width: 50px; height: 50px; background-color: #e10600; font-size: 24px; flex-shrink: 0;">4</div>
                    <div class="ms-3">
                      <h6 class="fw-bold mb-0">Disfruta</h6>
                      <small class="text-muted">Recibe tu moto</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA FINAL -->
            <div class="alert text-center mb-0" style="background-color: #1c1c1c; border: 2px dashed #e10600;">
              <h5 style="color: #ff3b3b;" class="fw-bold mb-2">¿Qué esperas?</h5>
              <p class="mb-3">Únete a miles de clientes satisfechos y obtén la moto de tus sueños hoy</p>
              <router-link to="/dashboard/productos" class="btn btn-danger btn-lg fw-bold">
                🚀 Comenzar Ahora
              </router-link>
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
  },
  data() {
    return {
      showSidebar: false
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    }
  },
  computed: {
    isMainDashboard() {
      return this.$route.path === '/dashboard'
    }
  }
}
</script>