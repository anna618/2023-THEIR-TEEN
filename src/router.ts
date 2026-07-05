import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import NotFoundView from "./views/NotFoundView.vue";
import PlaylistView from "./views/PlaylistView.vue";
import StudentView from "./views/StudentView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/students/:id",
      name: "student",
      component: StudentView,
      props: true,
    },
    {
      path: "/playlist",
      name: "playlist",
      component: PlaylistView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
