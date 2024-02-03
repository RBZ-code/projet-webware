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
                "action-btn-HP": this.backgroundColor === "hp",
                "action-btn-HP-form": this.backgroundColor === "hp-form",
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
.action-btn-HP {
    padding: 15px 25px;
    border-radius: 5px;
    background-color: var(--clr-blue);
    color: #f1f1f1;
    border: none;
    cursor: pointer;
    transition: 200ms ease-in-out;
    font-size: 30px;
}

.action-btn-HP-form {
    padding: 15px 25px;
    border-radius: 5px;
    background-color: var(--clr-blue);
    color: #f1f1f1;
    border: none;
    cursor: pointer;
    transition: 200ms ease-in-out;
    font-size: 30px;
}
.action-btn-HP-form:hover {
    color: #fff;
    background-color: var(--clr-dark);
}

.action-btn-HP:hover {
    color: #252525;
    background-color: #fff;
}

.action-btn:hover {
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
.black-btn {
    background-color: #000;
    color: white;
    padding: 20px;
    font-size: 20px;
    border-radius: 15px;
    width: 300px;
    border: none;
    cursor: pointer;
}
</style>
