import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },

    {
      path: "/Contact",
      name: "Contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/Surah",
      name: "Surah",
      component: () => import("../views/SurahView.vue"),
    },
    {
      path: "/About",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/Annaba",
      name: "Annaba",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AnnabaView.vue"),
    },
    {
      path: "/Annaziat",
      name: "Annaziat",
      component: () => import("../views/AnnaziatView.vue"),
    },
    {
      path: "/Abasa",
      name: "Abasa",
      component: () => import("../views/AbasaView.vue"),
    },
    {
      path: "/Attakwir",
      name: "Attakwir",
      component: () => import("../views/AttakwirView.vue"),
    },
    {
      path: "/Alinfitar",
      name: "Alinfitar",
      component: () => import("../views/AlinfitarView.vue"),
    },
    {
      path: "/Almutaffifin",
      name: "Almutaffifin",
      component: () => import("../views/AlmutaffifinView.vue"),
    },
    {
      path: "/Alinsyiqaq",
      name: "Alinsyiqaq",
      component: () => import("../views/AlinsyiqaqView.vue"),
    },
    {
      path: "/Alburuj",
      name: "Alburuj",
      component: () => import("../views/AlburujView.vue"),
    },
    {
      path: "/Attariq",
      name: "Attariq",
      component: () => import("../views/AttariqView.vue"),
    },
    {
      path: "/Alala",
      name: "Alala",
      component: () => import("../views/AlalaView.vue"),
    },
    {
      path: "/Alghasiyah",
      name: "Alghasiyah",
      component: () => import("../views/AlghasiyahView.vue"),
    },
    {
      path: "/Alfajr",
      name: "Alfajr",
      component: () => import("../views/AlfajrView.vue"),
    },
    {
      path: "/Albalad",
      name: "Albalad",
      component: () => import("../views/AlbaladView.vue"),
    },
    {
      path: "/Assyams",
      name: "Assyams",
      component: () => import("../views/AssyamsView.vue"),
    },
    {
      path: "/Allail",
      name: "Allail",
      component: () => import("../views/AllailView.vue"),
    },
    {
      path: "/Adduha",
      name: "Adduha",
      component: () => import("../views/AdduhaView.vue"),
    },
    {
      path: "/Alinsyirah",
      name: "Alinsyirah",
      component: () => import("../views/AlinsyirahView.vue"),
    },
    {
      path: "/Attin",
      name: "Attin",
      component: () => import("../views/AttinView.vue"),
    },
    {
      path: "/Alalaq",
      name: "Alalaq",
      component: () => import("../views/AlalaqView.vue"),
    },
    {
      path: "/Alqadr",
      name: "Alqadr",
      component: () => import("../views/AlqadrView.vue"),
    },
    {
      path: "/Albayyinah",
      name: "Albayyinah",
      component: () => import("../views/AlbayyinahView.vue"),
    },
    {
      path: "/Alzalzalah",
      name: "Alzalzalah",
      component: () => import("../views/AlzalzalahView.vue"),
    },
    {
      path: "/Aladiyat",
      name: "Aladiyat",
      component: () => import("../views/AladiyatView.vue"),
    },
    {
      path: "/Alqariah",
      name: "Alqariah",
      component: () => import("../views/AlqariahView.vue"),
    },
    {
      path: "/Attakasur",
      name: "Attakasur",
      component: () => import("../views/AttakasurView.vue"),
    },
    {
      path: "/Alasr",
      name: "Alasr",
      component: () => import("../views/AlasrView.vue"),
    },
    {
      path: "/Alhumazah",
      name: "Alhumazah",
      component: () => import("../views/AlhumazahView.vue"),
    },
    {
      path: "/Alfill",
      name: "Alfill",
      component: () => import("../views/AlfillView.vue"),
    },
    {
      path: "/Alquraisy",
      name: "Alquraisy",
      component: () => import("../views/AlquraisyView.vue"),
    },
    {
      path: "/Almaun",
      name: "Almaun",
      component: () => import("../views/AlmaunView.vue"),
    },
    {
      path: "/Alkausar",
      name: "Alkausar",
      component: () => import("../views/AlkausarView.vue"),
    },
    {
      path: "/Alkafirun",
      name: "Alkafirun",
      component: () => import("../views/AlkafirunView.vue"),
    },
    {
      path: "/Annasr",
      name: "Annasr",
      component: () => import("../views/AnnasrView.vue"),
    },
    {
      path: "/Allahab",
      name: "Allahab",
      component: () => import("../views/AllahabView.vue"),
    },
    {
      path: "/Alikhlas",
      name: "Alikhlas",
      component: () => import("../views/AlikhlasView.vue"),
    },
    {
      path: "/Alfalaq",
      name: "Alfalaq",
      component: () => import("../views/AlfalaqView.vue"),
    },
    {
      path: "/Annas",
      name: "Annas",
      component: () => import("../views/AnnasView.vue"),
    },
  ],
});

export default router;
