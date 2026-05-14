import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";

const routes = [
  { path: "/login", component: LoginView },
  { path: "/dashboard", component: DashboardView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// protección
router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem("user");

  if (to.path !== "/login" && !isAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;