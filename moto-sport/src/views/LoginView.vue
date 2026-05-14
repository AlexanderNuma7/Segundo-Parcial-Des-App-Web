<template>
  <div class="container mt-5">
    <div class="card p-4">
      <h2 class="text-center mb-3">Login</h2>

      <div v-if="error" class="alert alert-danger">
        Usuario o contraseña incorrectos
      </div>

      <form @submit.prevent="login">
        <input
          v-model="username"
          type="text"
          placeholder="Usuario"
          class="form-control mb-2"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Contraseña"
          class="form-control mb-3"
        />

        <button class="btn btn-primary w-100">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
import users from "../data/users.json";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: false,
    };
  },
  methods: {
    login() {
      const user = users.find(
        (u) =>
          u.username === this.username &&
          u.password === this.password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/dashboard");
      } else {
        this.error = true;
      }
    },
  },
};
</script>