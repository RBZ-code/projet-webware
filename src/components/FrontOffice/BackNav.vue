<template>
    <nav class="back-nav">
        <router-link to="/back-products">Produits</router-link> -
        <router-link to="/back-categories">Catégories</router-link> -
        <router-link to="/back-users">Utilisateurs</router-link> -
        <router-link to="/back-orders">Commandes</router-link> -
        <router-link to="/back-prospects">Prospects</router-link>
    </nav>
</template>

<script>

</script>

<style>
.back-nav {
    background-color: var(--clr-dark);
    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
    padding: 15px;
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: .5rem;
}

.back-nav a {
    color: var(--clr-white);
    text-decoration: none;
    transition: 200ms ease-in-out;
    margin: 0 15px;
}

.back-nav a.router-link-exact-active {
    font-weight: bold;
    color: var(--clr-blue);
}
</style>