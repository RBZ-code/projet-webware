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
import BackProspects from "@/views/BackProspects.vue";
import CatalogueFiltre from "@/views/CataloguePageFiltred.vue";
import DescriptionProduct from "@/views/DescriptionProduct.vue";
import Panier from "@/views/PanierPage.vue";
import checkOut from "@/views/PanierValidation.vue";



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
        name: "Catalogue",
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
        path: "/back-prospects",
        name: "back-prospects",
        component: BackProspects,
    },
    {

        path: "/product-page/:productId",
        name: "description-product",
        component: DescriptionProduct,
    },
    {
        path: "/category/:categoryId",
        name: "CatalogueFiltre",
        component: CatalogueFiltre,
    },
    {
        path: '/panier',
        name: 'panier',
        component: Panier,
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: checkOut,
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
