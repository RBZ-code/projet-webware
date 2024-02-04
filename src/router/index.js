import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePage.vue";
import AddUser from "@/views/RegisterPage.vue";
import PageConnexion from "@/views/LoginPage.vue";
import Catalogue from "@/views/CataloguePage.vue";
import BackProducts from "@/views/BackProducts.vue";
import BackProductsAdd from "@/views/BackProductsAdd.vue";
import BackCategories from "@/views/BackCategories.vue";
import BackUsers from "@/views/BackUsers.vue";
import BackOrders from "@/views/BackOrders.vue";
import CatalogueFiltre from "@/views/CataloguePageFiltred.vue";

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
    {
        path: "/back-products-add",
        name: "back-products-add",
        component: BackProductsAdd,
    },
    {
        path: "/back-categories",
        name: "back-categories",
        component: BackCategories,
    },
    {
        path: "/back-users",
        name: "back-users",
        component: BackUsers,
    },
    {
        path: "/back-orders",
        name: "back-orders",
        component: BackOrders,
    },
    {
        path: "/category/:categoryId",
        name: "CatalogueFiltre",
        component: CatalogueFiltre,
      },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
