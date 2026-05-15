<template>
  <div class="container mt-4">
    <h3 class="mb-4">Clientes y Compras</h3>

    <div v-if="orders.length === 0" class="alert alert-secondary">
      No hay compras en proceso.
    </div>

    <div v-else class="row">
      <div v-for="order in orders" :key="order.id" class="col-md-6 mb-3">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-2">{{ order.product.name }}</h5>
            <p class="card-text mb-1"><strong>Comprador:</strong> {{ order.buyer }}</p>
            <template v-if="isAdmin">
              <p class="card-text mb-1"><strong>Correo:</strong> {{ order.email || 'No registrado' }}</p>
              <p class="card-text mb-1"><strong>Teléfono:</strong> {{ order.phone || 'No registrado' }}</p>
              <p class="card-text mb-1"><strong>Método de pago:</strong> {{ order.paymentMethod || 'No registrado' }}</p>
            </template>
            <template v-else>
              <p class="card-text text-muted mb-1">Datos personales solo visibles para administradores.</p>
            </template>
            <p class="card-text mb-1"><strong>Marca:</strong> {{ order.product.brand }}</p>
            <p class="card-text mb-1"><strong>Cilindraje:</strong> {{ order.product.cc }}</p>
            <p class="card-text mb-1"><strong>Precio:</strong> ${{ order.product.price }}</p>
            <p class="card-text mb-1"><strong>Estado:</strong> {{ order.status }}</p>
            <p class="card-text"><small class="text-muted">Fecha: {{ order.date }}</small></p>
            <button v-if="isAdmin" @click="eliminarPedido(order.id)" class="btn btn-sm btn-danger mt-3">
              Eliminar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: []
    }
  },
  computed: {
    role() {
      return localStorage.getItem('role') || 'user'
    },
    isAdmin() {
      return this.role === 'admin'
    }
  },
  mounted() {
    this.cargarPedidos()
  },
  methods: {
    cargarPedidos() {
      const storedOrders = localStorage.getItem('orders')
      this.orders = storedOrders ? JSON.parse(storedOrders) : []
    },
    eliminarPedido(orderId) {
      if (!this.isAdmin) return
      if (!confirm('¿Deseas eliminar este pedido?')) return
      this.orders = this.orders.filter(order => order.id !== orderId)
      localStorage.setItem('orders', JSON.stringify(this.orders))
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 14px;
}
</style>
