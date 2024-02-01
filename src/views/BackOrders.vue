<template>
    <BackNav />
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
                        <MyButton label="Modifier" modifier="edit" @GeneralEventBtn="changeOrderStatus()" />
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
    computed: {
        orders() {
            return this.$store.state.commandes;
        },
    },
};
</script>

<style>

</style>