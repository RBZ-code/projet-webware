import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePage.vue";
import AddUser from "@/views/RegisterPage.vue";
import PageConnexion from "@/views/LoginPage.vue";

const routes = [
    {
        path: "/add",
        name: "add",
        component: AddUser,
    },
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/connexion",
        name: "connexion",
        component: PageConnexion,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
