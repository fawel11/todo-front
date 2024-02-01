import Vue from "vue";
import Router from "vue-router";
import { setupGuards } from 'router/guards'
Vue.use(Router);

const router = new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [

    {
      path: "/",
      component: () => import("layouts/blank.vue"),
      children: [
        {
          path: "/",
          name: "login",
          component: () => import("pages/Login.vue"),
          meta: {
            pageTitle: "Login",
            unauthenticatedOnly: true,
          },
        },
        {
          name: "login-form",
          path: "login",
          component: () => import("pages/Login.vue"),
          meta: {
            pageTitle: "Login",
          },
        },
      ],
    },

    {
      path: "/",
      name: "loggedin",
      component: () => import("layouts/default.vue"),
      children: [
        {
          name: "admin",
          path: "/dashboard",
          component: () => import("pages/Dashboard.vue"),
          meta: {
            pageTitle: "Dashboard",
          },
        },
        {
          name: "task",
          path: "/task",
          component: () => import("pages/Task.vue"),
          meta: {
            pageTitle: "Task",
          },
        },
        {
          name: "not-authorized",
          path: "/not-authorized",
          component: () => import("pages/not-authorized.vue"),
          meta: {
            pageTitle: "Dashboard",
          },
        },
      ],
    },
    
  ],
});
setupGuards(router)
export default router;
