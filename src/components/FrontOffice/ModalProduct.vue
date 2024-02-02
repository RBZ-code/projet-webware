<template>
    <div class="modal-overlay" v-if="isVisible">
        <div class="modal">
            <span class="close"
            @click="closeModal">X</span>
            <slot></slot>
            <MyButton></MyButton>
            <MyButton></MyButton>
        </div> 
    </div>
</template>

<script>
import MyButton from "@/components/FrontOffice/MyButton.vue";
export default {
    data(){

    },
    props: {
        isVisible: {
            type: Boolean,
        },
        isInTheBagComputed: {
            type: Boolean,
        }
    },
    components: {
        MyButton,
    },
    methods: {
        add(){
            this.$emit("add");
        },
        remove(){
            this.$emit("remove");
        },
        closeModal(){
            this.$emit("close");
        }
    }
}

</script>

<style>

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    position: relative;
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    width: 25%;
    display: flex;
    justify-content: center;

}
.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 18px;
    color: #333;
    z-index: 2;
}

</style>