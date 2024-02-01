<template>

<div class="cards-container">
    <div v-for="(prod, index) in filteredProducts" :key="index" class="cards">
        <img :src="prod.image" :alt="prod.titre" class="img-produit"/>
        <h4>{{ prod.titre }}</h4>
        <p>{{ prod.prix }} €</p>
        <p>moq :{{ prod.moq }}</p>
        <button>Ajouter au panier 🛒 </button>
    </div>
</div>
    
</template>

<script>
export default{
    data(){
        return
    }
}
</script>

<style>

</style>