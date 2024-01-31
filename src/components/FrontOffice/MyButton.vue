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
                "red-btn": this.backgroundColor === 
                "red",
                "blue-btn": this.backgroundColor === "blue",
            };
        },
    },
};
</script>

<style>
.green-btn {
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
</style>
