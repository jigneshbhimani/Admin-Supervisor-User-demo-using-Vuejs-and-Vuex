import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // Register routes here
  {
    path: "/",
    name: "register",
    component: () => import("../components/Register.vue"),
  },

  // Login routes here
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue"),
  },

  // Admin List routes here
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin/Admin.vue"),
  },

  // Add Supervisor routes here
  {
    path: "/addSupervisor",
    name: "addSupervisor",
    component: () => import("../views/Admin/AddSupervisor.vue"),
  },

  // Supervisor List routes here
  {
    path: "/supervisor",
    name: "supervisor",
    component: () => import("../views/Supervisor/Supervisor.vue"),
  },

  // Supervisor Detail routes here
  {
    path: "/supervisor-details/:id",
    name: "supervisor-detail",
    component: () => import("../views/Supervisor/SupervisorDetail.vue"),
  },

  // Add User routes here
  {
    path: "/addUser",
    name: "addUser",
    component: () => import("../views/Supervisor/AddUser.vue"),
  },

  // User List routes here
  {
    path: "/user",
    name: "user",
    component: () => import("../views/User/User.vue"),
  },

  // User Detail routes here
  {
    path: "/user-details/:id",
    name: "user-detail",
    component: () => import("../views/User/UserDetail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
