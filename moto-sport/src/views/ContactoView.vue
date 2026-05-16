<template>
  <div class="container mt-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <h3 class="card-title mb-3">Contáctanos</h3>
        <p class="card-text">
          Si necesitas ayuda con un pedido o quieres más información sobre nuestras motos,
          comunícate con nosotros por cualquiera de estos canales.
        </p>

        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="p-3 border rounded h-100" style="background-color: #1c1c1c;">
              <h5>Correo</h5>
              <p>soporte@motostore.com</p>
              <h5>Teléfono</h5>
              <p>+57 3222492454</p>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="p-3 border rounded h-100" style="background-color: #1c1c1c;">
              <h5>Dirección</h5>
              <p>Transversal 50 calle 68-37-ocaña, Colombia</p>
              <h5>Horario</h5>
              <p>Lunes a viernes: 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <h5>Mensaje</h5>
          <p class="text-muted">Escribe tu consulta en el formulario de atención al cliente.</p>
          <form>
            <div class="mb-3">
              <label class="form-label">Nombre</label>
              <input type="text" class="form-control" placeholder="Tu nombre" readonly />
            </div>
            <div class="mb-3">
              <label class="form-label">Correo electrónico</label>
              <input type="email" class="form-control" placeholder="tu@correo.com" readonly />
            </div>
            <div class="mb-3">
              <label class="form-label">Mensaje</label>
              <textarea class="form-control" rows="4" placeholder="Escribe tu pregunta" readonly></textarea>
            </div>
            <button class="btn btn-danger" disabled>Formulario de ejemplo</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactoView'
}
</script>
