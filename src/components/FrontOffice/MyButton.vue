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
