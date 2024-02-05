<template>
    <div>
        <button :class="btnClass" @click="GeneralEventBtn">{{ label }}</button>
    </div>
</template>

<script>

export default {
    props: {
        label: String,
        backgroundColor: String,
    },
    methods: {
        GeneralEventBtn() {
            this.$emit("GeneralEventBtn");
        },
    },
    computed: {
        btnClass() {
            return {
                "green-btn": this.backgroundColor === "green",
                "red-btn": this.backgroundColor === "red",
                "blue-btn": this.backgroundColor === "blue",
                "black-btn": this.backgroundColor === "black",
            };
        },
    },
};
</script>

<style>

.green-btn {
    padding: 5px 15px;
    background-color: green;
    color: white;
}
.red-btn {
    background-color: red;
    color: white;
}
.blue-btn {
    background-color: blue;
    color: white;
}
.black-btn{
    background-color: #000;
    color: white;
    position: absolute;
    text-align:center;
    top:35vw;
    left:50%;
    transform: translate(-50%,-50%);
    padding: 20px;
    font-size: 20px;
    border-radius: 15px;
    width: 300px;
    border: none;
    cursor: pointer;
}
@media only screen and (min-width: 375px) and (max-width: 767px){
    .black-btn{
        top: 70vw;
        width: 30%;
        height: 6vh;
        font-size: 14px;
        margin: 10px auto;
    }
}
.black-btn:hover{
    opacity: 70%;
    cursor: pointer;
}

</style>
