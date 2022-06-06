import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "register",
    component: () => import("../components/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin/Admin.vue"),
  },
  {
    path: "/addSupervisor",
    name: "addSupervisor",
    component: () => import("../views/Admin/AddSupervisor.vue"),
  },
  {
    path: "/supervisor",
    name: "supervisor",
    component: () => import("../views/Supervisor/Supervisor.vue"),
  },
  {
    path: "/supervisor-details/:id",
    name: "supervisor-detail",
    component: () => import("../views/Supervisor/SupervisorDetail.vue"),
  },
  {
    path: "/addUser",
    name: "addUser",
    component: () => import("../views/Supervisor/AddUser.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/User/User.vue"),
  },
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
