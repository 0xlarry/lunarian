import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Anchor from "@/views/Anchor.vue";
import Mirror from "@/views/Mirror.vue";
import TerraSwap from "@/views/TerraSwap.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/anchor",
    name: "Anchor Protocol",
    component: Anchor,
  },
  {
    path: "/mirror",
    name: "Mirror Protocol",
    component: Mirror,
  },
  {
    path: "/terraswap",
    name: "TerraSwap",
    component: TerraSwap,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
