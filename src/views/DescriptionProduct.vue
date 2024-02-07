<template>
    <div >
        <div  class="cards"
        >
            <!-- <h1>{{products[descritpionId].titre}}</h1> -->
            <button @click="show()">hahaa</button>
        </div>
            
    </div>
</template>

<script>
export default {
    data() {
        return {
            descriptionId: null,
        }
    },
    method: {
        show(){
            console.log(this.descriptionId)
        }
    },
    computed: {
        products() {
            return this.$store.state.produits;
        },
        selectedProduct() {
            return this.products.find(product => product.id === this.descriptionId);
        },
    },
    watch: {
        "$route.params.descriptionId"(newDescriptionId) {
            this.descriptionId = parseInt(newDescriptionId);
        },
    },
    created() {
        this.descriptionId = parseInt(this.$route.params.descriptionId);
    },
};
</script>

<style scoped>

    .description-price{       
        margin:0 20px;
    }
    .image-container{
        width: 100%;
        height: auto;
        text-align: center;  
    }
    .image-container img{
        object-fit: contain;
        width: 70%;
        height: auto;       
    }
    .description-price h2{
        text-align: center;           
    }
    .description-price .product-price {
        text-align: right;
        margin-top: 10px;
        font-size: 20px;
    }
    .description-price .tva-price{
        text-align: right;
        opacity: 0.7;
    }
    .product-quantity{
        margin: 10px 10px;
    }
    .description-price .product-quantity{
        /* text-align: center; */
        width: 100%;
        height: 50px;
        border: 1px solid rgba(0, 0, 0, 0.3) ;
    }
    .product-quantity .minus-button{
        width: 17%;
        height: 100%;
        margin-left: auto;
        margin-right: 0;
    }
    .product-quantity .plus-button{
        width: 18%;
        height: 100%;
        float: right;
    }
    .minus-button, .plus-button{
        border: none;
        background-color: rgb(115, 115, 246);
    }
    .description-text{
        margin: 0px 20px;
        padding-top: 80px;
    }
    .description-text .text-title{
        font-size: 18px;
    }
    .add-basket{
        width: 100%;
        height: 50px;
        background-color: rgba(115, 115, 246, 0.747);
        border: none;
        text-align: center;
    }
    .basket-container{
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }

</style>