import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Signup from "@/views/Signup.vue";
import Entry from "@/views/Entry.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/signup', component: Signup },
  { path: '/entry', component: Entry },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;