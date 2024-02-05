import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePage.vue";
import AddUser from "@/views/RegisterPage.vue";
import PageConnexion from "@/views/LoginPage.vue";
import BackProducts from "@/views/BackProducts.vue"
import Catalogue from "@/views/CataloguePage.vue"


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
        path: "/catalogue",
        name: "catalogue",
        component: Catalogue,
    },
    {
        path: "/connexion",
        name: "connexion",
        component: PageConnexion,
    },
    {
        path: "/back-products",
        name: "back-products",
        component: BackProducts,
    },
    
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
