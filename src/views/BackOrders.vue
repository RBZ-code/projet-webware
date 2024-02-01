<template>
    <BackNav />
    <header class="action-bar">
        <h1>Gestion des commandes</h1>
    </header>
    <div class="listing-products">
        <div class="listing-template">
        <table class="listing-tab">
            <thead>
                <tr>
                    <th>N° commande</th>
                    <th>Montant</th>
                    <th>Utilisateur</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, index) in orders" :key="index">
                    <td>{{ order.id }}</td>
                    <td>{{ order.coutTotal + "€" }}</td>
                    <td>{{ order.userId }}</td>
                    <td>
                        <MyButton label="Signaler l'expédition" modifier="edit" @GeneralEventBtn="changeOrderStatus(order.id)" v-if="order.toBeDelivered"/>
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
    methods: {
        changeOrderStatus(orderId) {
            this.$store.commit("changeOrderStatus", orderId)
        }
    },
    computed: {
        orders() {
            return this.$store.state.commandes;
        },
    },
};
</script>

<style>

</style>