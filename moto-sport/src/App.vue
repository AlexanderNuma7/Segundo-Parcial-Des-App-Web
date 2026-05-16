<template>
  <div id="app">
    <!-- Aquí se renderiza la vista activa -->
    <router-view />
  </div>
</template>
<script> export default { name: 'App' } </script>

<style>
:root {
  color-scheme: dark;
  --bg-main: #0f0f0f;
  --bg-section: #1c1c1c;
  --text-main: #ffffff;
  --text-secondary: #b8b8b8;
  --text-tertiary: #808080;
  --accent-red: #e10600;
  --accent-red-bright: #ff3b3b;
  --accent-red-hover: #ff2a2a;
  --accent-blue: #0d6efd;
  --button-secondary: #2a2a2a;
  --border-dark: #444;
  --shadow-black: rgba(0,0,0,0.5);
}

html, body, #app {
  min-height: 100%;
  background: linear-gradient(180deg, var(--bg-main), var(--bg-section));
  color: var(--text-main);
}

body {
  background-color: var(--bg-main);
}

.navbar, .navbar-dark.bg-dark {
  background-color: var(--bg-main) !important;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.navbar .navbar-brand,
.navbar .nav-link,
.navbar .nav-link:focus {
  color: var(--text-main) !important;
}

.navbar .nav-link:hover,
.navbar .nav-link:focus {
  color: var(--accent-red) !important;
}

.navbar .nav-link.active {
  color: var(--accent-red) !important;
  font-weight: 600;
}

.bg-light,
.bg-white,
.bg-dark,
.bg-primary,
.bg-secondary,
.card,
.card-moto,
.card.shadow,
.card.shadow-sm,
.card-body,
.card-header,
.card-footer,
.modal-card,
.alert,
.alert-info,
.alert-warning,
.alert-danger,
.alert-success,
.form-control,
.form-select,
.btn-secondary,
.btn-dark,
.btn-outline-primary,
.btn-outline-warning,
.btn-outline-secondary,
.btn-outline-danger,
.btn-outline-success {
  background-color: var(--bg-section) !important;
  color: var(--text-main) !important;
  border-color: rgba(255,255,255,0.12) !important;
}

aside {
  background-color: var(--bg-section) !important;
  border-color: rgba(255,255,255,0.12) !important;
}

.text-dark {
  color: var(--text-main) !important;
}

.nav-link:hover,
.nav-link:focus {
  color: var(--accent-red) !important;
}

.nav-link.active {
  color: var(--accent-red) !important;
}

.card,
.card-moto,
.modal-card {
  background-color: var(--bg-section) !important;
  color: var(--text-main) !important;
}

.card-body h5,
.card-title,
h1, h2, h3, h4, h5, h6,
.modal-title,
.card .fw-bold,
.badge,
.alert-heading {
  color: var(--text-main) !important;
}

.card-body p,
.card-text,
.text-muted,
.form-text,
small,
.modal-body p,
.card .text-muted,
.lead {
  color: var(--text-secondary) !important;
}

.text-danger {
  color: var(--accent-red-bright) !important;
}

.btn-danger,
.btn-danger:hover,
.btn-danger:focus {
  color: #fff !important;
  background-color: #dc3545 !important;
  border-color: #dc3545 !important;
}

.btn-success {
  background-color: var(--accent-red) !important;
  border-color: var(--accent-red) !important;
  color: #fff !important;
}

.btn-success:hover,
.btn-success:focus,
.btn-success:active {
  background-color: var(--accent-red-hover) !important;
  border-color: var(--accent-red-hover) !important;
}

.btn-primary {
  background-color: var(--accent-blue) !important;
  border-color: var(--accent-blue) !important;
  color: #fff !important;
}

.btn-secondary {
  background-color: var(--button-secondary) !important;
  border-color: var(--button-secondary) !important;
  color: #fff !important;
}

.btn-secondary:hover,
.btn-secondary:focus {
  background-color: #3a3a3a !important;
  border-color: #3a3a3a !important;
}

.btn-dark {
  background-color: var(--bg-section) !important;
  border-color: var(--bg-section) !important;
  color: #fff !important;
}

.form-control,
.form-select {
  background-color: #2a2a2a !important;
  color: #fff !important;
  border: 1px solid var(--border-dark) !important;
  box-shadow: none !important;
}

.form-control::placeholder,
.form-select::placeholder {
  color: var(--text-secondary) !important;
  opacity: 1;
}

.form-control:focus,
.form-select:focus {
  border-color: var(--accent-red) !important;
  box-shadow: 0 0 0 0.25rem rgba(225, 6, 0, 0.18) !important;
  color: #fff !important;
}

.modal-card {
  border: 1px solid rgba(255,255,255,0.08) !important;
}

.modal-header,
.modal-footer {
  border-color: rgba(255,255,255,0.08) !important;
}

.btn-close {
  color: #fff !important;
}

.btn-close::before {
  color: #fff !important;
}

.card-moto {
  box-shadow: 0 15px 35px var(--shadow-black) !important;
}

.border,
.border-top,
.border-bottom,
.border-start,
.border-end {
  border-color: rgba(255,255,255,0.12) !important;
}

.text-white,
.text-muted,
body,
#app,
.container,
.row,
.col,
.col-12 {
  color: #fff !important;
}
</style>