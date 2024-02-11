<template>
    <div class="carousel">
        <div
            class="carousel-images"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
            <div
                v-for="(product, index) in products"
                :key="index"
                class="carousel-slide"
                :class="{ active: index === currentIndex }"
            >
                <div class="image-container">
                    <img
                        :src="product.image"
                        :alt="product.title"
                    />
                </div>
                <router-link :to="'/product-page/' + product.id">
                    <button class="voir-produit-btn" @click="scrollToTop" >Voir produit</button>
                </router-link>
            </div>
        </div>
        <button class="carousel-control prev" @click="prevSlide">&lt;</button>
        <button class="carousel-control next" @click="nextSlide">&gt;</button>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentIndex: 0,
        };
    },
    methods: {
        prevSlide() {
            this.currentIndex =
                (this.currentIndex - 1 + this.products.length) %
                this.products.length;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.products.length;
        },
         scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
};
</script>

<style scoped>
.image-container img {
    width: 100%;
    height: 100%;
}

.carousel {
    margin: 5rem;
    position: relative;
    width: 50%;
    height: 400px;
    overflow: hidden;
}

.carousel-images {
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-slide {
    position: relative;
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
}

.carousel-slide img {
    max-height: 400px;
}

.carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: var(--clr-blue);
    border-radius: 4px;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
}

.carousel-control.prev {
    left: 0;
}

.carousel-control.next {
    right: 0;
}

.voir-produit-btn {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--clr-blue);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
}

.voir-produit-btn:hover {
    background-color: #252525;
}
</style>
