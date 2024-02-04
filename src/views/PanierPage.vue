<template>
    <div>
      <div v-for="(prod, index) in cart" :key="index" class="card">
        <div>
          <img :src="prod.image" :alt="prod.titre" :width="150" :height="150" />
        </div>
        <p>{{ prod.description }}</p>
        <div class="quantity">
          <button @click="updateQuantity(prod.id, -1)" :disabled="prod.quantity === 1">-</button>
          <p>{{ prod.quantity }}</p>
          <button @click="updateQuantity(prod.id, 1)">+</button>
          <p>US$<strong class="margePrix">{{ prod.prix }}</strong></p>
        </div>
        <a href="#" @click="removeProduct(prod)" class="remove">Remove item</a>
      </div>
      <h2>Grand Total: US$ {{ calculateTotal() }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cart() {
        return this.$store.state.productsAdd;
      },
    },
    methods: {
      updateQuantity(productId, change) {
        const product = this.cart.find(p => p.id === productId);
        if (product) {
          product.quantity += change;
          this.$store.commit("updateProduct", product);
        }
        this.$forceUpdate();
      },
      removeProduct(product) {
        this.$store.commit("deleteProductShop", product);
        this.$forceUpdate();
      },
      calculateTotal() {
        return this.cart.reduce((total, prod) => total + (prod.prix * prod.quantity), 0).toFixed(2);
      },
    },
  };
  </script>
  
  
  
  
  
  <style scoped>
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 30px;
    border-bottom: 1px grey solid;
    width: 80%;
    margin: auto;
    gap: 40px;
  }
  .remove {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .price {
    margin-left: 10px;
  }
  button {
    padding: 4px;
    height: 30px;
    width: 20px;
  }
  h2 {
    text-align: right;
    width: 80%;
    margin: 10px auto;
    padding-bottom: 50px;
  }
  </style>
  