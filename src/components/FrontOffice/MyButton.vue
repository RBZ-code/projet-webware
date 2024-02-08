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
        backgroundColor: String,
        disabled: Boolean,
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
                "action-btn": this.modifier === "action",
                "green-btn": this.backgroundColor === "green",
                "red-btn": this.backgroundColor === "red",
                "blue-btn": this.backgroundColor === "blue",
                "black-btn": this.backgroundColor === "black",
                "connexion-btn": this.backgroundColor === "green",
                "home-btn": this.modifier === "home",
            };
        },
    },
};
</script>

<style>

.edit-btn {
    margin: 0.5rem 0.5rem;
    padding: 5px 15px;
    border-radius: 9999px;
    background-color: var(--clr-blue);
    color: white;
    border: none;
    cursor: pointer;
    transition: 200ms ease-in-out;
}

.edit-btn:hover {
    background-color: var(--clr-dark);
}

.action-btn {
    padding: 15px 25px;
    border-radius: 5px;
    background-color: var(--clr-blue);
    color: white;
    border: none;
    cursor: pointer;
    transition: 200ms ease-in-out;
}

.action-btn:hover {
    color: #fff;
    background-color: var(--clr-dark);
}

.home-btn {
    margin-top: 2rem;
    padding: 25px 30px;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bold;
    font-family: var(--font-text);
    border-radius: 5px;
    background-color: var(--clr-blue);
    color: white;
    border: none;
    cursor: pointer;
    transition: 200ms ease-in-out;
}

.home-btn:hover {
    color: #fff;
    background-color: var(--clr-dark);
}

.connexion-btn {
    padding: 15px 20px;
    border-radius: 5px;
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

.black-btn:hover{
    opacity: 70%;
    cursor: pointer;
}

</style>
