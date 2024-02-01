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
                "action-btn": this.modifier === "action",
                "green-btn": this.backgroundColor === "green",
                "red-btn": this.backgroundColor === "red",
                "blue-btn": this.backgroundColor === "blue",
                "connexion-btn" : this.backgroundColor === "green",
            };
        },
    },
};
</script>

<style>
.edit-btn {
    margin: .5rem .5rem;
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
    color: var(--clr-dark);
    background-color: var(--clr-light-blue);
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
</style>
