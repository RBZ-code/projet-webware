<template>
    <div>
        <button :class="btnClass" @click="GeneralEventBtn">{{ label }}</button>
    </div>
</template>

<script>

export default {
    props: {
        label: String,
        modifier: String,
        backgroundColor: String
    },
    methods: {
        GeneralEventBtn() {
            this.$emit("GeneralEventBtn");
        },
    },
    computed: {
        btnClass() {
            return {
                "edit-btn": this.modifier === "edit",
                "green-btn": this.backgroundColor === "green",
                "red-btn": this.backgroundColor === "red",
                "blue-btn": this.backgroundColor === "blue",
                "black-btn": this.backgroundColor === "black",
                "connexion-btn" : this.backgroundColor === "green",

            };
        },
    },
};
</script>

<style>
.edit-btn {
    padding: 5px 15px;
    border-radius: 9999px;
    background-color: var(--clr-blue);
    color: white;
    border: none;
    cursor: pointer;
}

.connexion-btn {
    padding: 10px 20px;
    border-radius: 9999px;
    background-color: var(--clr-green);
    color: white;
    border: none;
    cursor: pointer;

}
.green-btn {
    background-color: green;
    color: white;
}
.red-btn {
    background-color: red;
    color: white;
}
.blue-btn {
    padding: 10px 20px;
    border-radius: 9999px;
    background-color: var(--clr-blue);
    color: white;
    border: none;
    cursor: pointer;
}
.black-btn{
    background-color: #000;
    color: white;
    position: absolute;
    text-align:center;
    top:25vw;
    left:50%;
    transform: translate(-50%,-50%);
    padding: 20px;
    font-size: 20px;
    border-radius: 15px;
    width: 300px;
    border: none;
    cursor: pointer;
}

</style>
