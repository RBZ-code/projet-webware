<template>
    <BackNav />
    <header class="action-bar">
        <h1>Gestion des commandes</h1>
    </header>
    <form class="filter-bar" @submit.prevent="">
        <label for="back-order-search">Rechercher un produit :
            <input id="back-order-search" name="search" type="search" placeholder="Numéro de commande"
                v-model="searchQuery" />
        </label>
    </form>
    <div class="listing-products">
        <div class="listing-template">
            <table class="listing-tab">
                <thead>
                    <tr>
                        <th>N° commande</th>
                        <th>Montant</th>
                        <th>Utilisateur</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(order, index) in filteredOrders" :key="index">
                        <td>{{ "#" + order.id }}</td>
                        <td>{{ order.coutTotal + "€" }}</td>
                        <td>{{ order.userId }}</td>
                        <td>
                            <MyButton label="Signaler l'expédition" modifier="edit"
                                @GeneralEventBtn="changeOrderStatus(order.id)" v-if="!order.isCommandSent" />
                            <p class="delivered" v-else>Expédié</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import BackNav from "@/components/FrontOffice/BackNav.vue";
import MyButton from "@/components/FrontOffice/MyButton.vue";

export default {
    components: {
        BackNav,
        MyButton
    },
    data() {
        return {
            searchQuery: "",
        };
    },
    methods: {
        changeOrderStatus(orderId) {
            if (confirm("Passer la commande en statut livré ?")) {
                this.$store.commit("changeOrderStatus", orderId)
            }
        }
    },
    computed: {
        orders() {
            return this.$store.state.commandes;
        },
        filteredOrders() {
            if (!this.searchQuery) return this.orders;
            let query = this.searchQuery.toLowerCase();
            return this.orders.filter((prod) =>
                String(prod.id).toLowerCase().includes(query)
            );
        },
    },

};
</script>

<style>
.delivered {
    color: green;
}
</style>