<template>
    <div v-if="selectedProduct">
        <div class="cards">
            <img
                :src="selectedProduct.image"
                :alt="selectedProduct.titre"
                :width="150"
                :height="150"
            />
            <div>
                <h2>{{ selectedProduct.titre }}</h2>
                <p><strong>US$ {{ selectedProduct.prix }}</strong></p>
                <p><strong>Description</strong></p>
                <p>{{ selectedProduct.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        selectedProduct() {
            return this.$store.state.selectedProduct;
        },
    },
};
</script>

<style scoped>
</style>
