<template>
    <main class="register-background">
        <div :class="{ 'form-container': true, 'wizz-effect': showErrorEffect }">
            <!-- ... -->
            <h1>Inscription</h1>

            <label class="form-label" for="raisonSociale">Raison sociale</label>
            <input
                class="form-input"
                :class="{ 'valid-input': isValidRaisonSociale }"
                type="text"
                id="raisonSociale"
                placeholder="Entrez votre raison sociale"
                v-model="userData.raisonSociale"
                @input="validateRaisonSociale"
            />
            <p class="error-message" v-if="!isValidRaisonSociale">
                Veuillez entrer une raison sociale valide
            </p>
            <label class="form-label" for="siret">Numéro SIRET</label>
            <input
                class="form-input"
                :class="{ 'valid-input': isValidSiret }"
                type="text"
                id="siret"
                placeholder="Entrez votre numéro SIRET"
                v-model="userData.siret"
                @input="validateSiret"
            />
            <p class="error-message" v-if="!isValidSiret">
                Le numéro SIRET doit contenir 14 chiffres
            </p>
            <label class="form-label" for="adresse">Adresse</label>
            <input
                class="form-input"
                :class="{ 'valid-input': isValidAdresse }"
                type="text"
                id="adresse"
                placeholder="Entrez votre adresse"
                v-model="userData.adresse"
                @input="validateAdresse"
            />
            <p class="error-message" v-if="!isValidAdresse">
                Veuillez entrer une adresse valide
            </p>
            <!-- ... -->
            <label class="form-label" for="codePostal">Code Postal</label>
            <input
                class="form-input"
                :class="{ 'valid-input': isValidCodePostal }"
                type="text"
                id="codePostal"
                placeholder="Entrez votre code postal"
                v-model="userData.codePostal"
                @input="validateCodePostal"
            />
            <p class="error-message" v-if="!isValidCodePostal">
                Le code postal doit contenir 5 chiffres
            </p>
            <!-- ... -->
            <label class="form-label" for="ville">Ville</label>
            <input
                class="form-input"
                :class="{ 'valid-input': isValidVille }"
                type="text"
                id="ville"
                placeholder="Entrez votre ville"
                v-model="userData.ville"
                @input="validateVille"
            />
            <p class="error-message" v-if="!isValidVille">
                Veuillez entrer une ville valide
            </p>
            <!-- ... -->
            <label class="form-label" for="email">Adresse Email</label>
            <input
                class="form-input"
                :class="{ 'valid-input': isValidAdresse }"
                type="email"
                id="email"
                placeholder="Entrez votre adresse email"
                v-model="userData.email"
                @input="validateEmail"
            />
            <p class="error-message" v-if="!isValidEmail">
                Veuillez entrer une adresse email valide
            </p>
            <!-- ... -->
            <label class="form-label" for="password">Mot de passe</label>
            <input
                class="form-input"
                :class="{ 'valid-input': isValidPassword }"
                type="password"
                id="password"
                placeholder="Entrez votre mot de passe"
                v-model="userData.password"
                @input="validatePassword"
            />
            <p class="error-message" v-if="!isValidPassword">
                Veuillez entrer un mot de passe valide (au moins 3 caractères)
            </p>
            <!-- ... -->
            <label class="form-label" for="passwordConfirmation"
                >Confirmation mot de passe</label
            >
            <input
                class="form-input"
                :class="{ 'valid-input': isValidPasswordConfirmation }"
                type="password"
                id="passwordConfirmation"
                placeholder="Confirmez votre mot de passe"
                v-model="passwordConfirmation"
                @input="validatePasswordConfirmation"
            />
            <p class="error-message" v-if="!isValidPasswordConfirmation">
                Les mots de passe ne correspondent pas
            </p>
            <!-- ... -->
            <MyButton
                label="Inscription"
                modifier="action"
                @click="addUser"
                class="btn"
            />
        </div>
    </main>
    <!-- ... -->
</template>

<script>
import MyButton from "@/components/FrontOffice/MyButton.vue";

export default {
    data() {
        return {
            userData: {
                // ...
            },
            isValidRaisonSociale: true,
            isValidAdresse: true,
            isValidCodePostal: true,
            isValidEmail: true,
            isValidPassword: true,
            isValidPasswordConfirmation: true,
            isValidSiret: true,
            isValidVille: true,
            showErrorEffect: false,
        };
    },
    methods: {
        validateSiret() {
            this.isValidSiret = /^[0-9]{14}$/.test(this.userData.siret);
        },
        validateVille() {
            this.isValidVille = this.userData.ville.length >= 3;
        },

        validateRaisonSociale() {
            this.isValidRaisonSociale = this.userData.raisonSociale.length >= 3;
        },

        validateAdresse() {
            this.isValidAdresse = this.userData.adresse.length >= 3;
        },

        validateCodePostal() {
            this.isValidCodePostal = /^[0-9]{5}$/.test(
                this.userData.codePostal
            );
        },

        validateEmail() {
            this.isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                this.userData.email
            );
        },

        validatePassword() {
            this.isValidPassword = this.userData.password.length >= 3;
        },

        validatePasswordConfirmation() {
            this.isValidPasswordConfirmation =
                this.userData.password === this.passwordConfirmation;
        },

        addUser() {
            if (
                this.isValidRaisonSociale &&
                this.isValidSiret &&
                this.isValidAdresse &&
                this.isValidCodePostal &&
                this.isValidVille &&
                this.isValidEmail &&
                this.isValidPassword &&
                this.isValidPasswordConfirmation &&
                this.userData.raisonSociale &&
                this.userData.siret &&
                this.userData.adresse &&
                this.userData.codePostal &&
                this.userData.ville &&
                this.userData.email &&
                this.userData.password &&
                this.passwordConfirmation
            ) {
                this.$store.commit("addUser", this.userData);
                this.userData = {};
                this.passwordConfirmation = "";
                this.$router.push("/connexion");
            } else {
                this.showErrorEffect = true;
                setTimeout(() => {
                    this.showErrorEffect = false;
                }, 500);
            }
        },
    },
    components: {
        MyButton,
    },
   
};
</script>

<style scoped>
.register-background {
    padding: 100px;
    background-image: url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btn {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
}

.form-container {
    width: clamp(300px, 50%, 600px);
    padding: 30px;
    background-color: var(--clr-light-grey);
    color: var(--clr-dark);
    border-radius: 8px;
    filter: drop-shadow(0 0 2rem var(--clr-dark));
}

h1 {
    margin-bottom: 1rem;
    text-align: center;
}

.form-label {
    display: block;
    margin-bottom: 6px;
}

.form-input {
    width: 100%;
    padding: 8px;
    margin-bottom: 12px;
    border: none;
    border-radius: 4px;
    background-color: #ffffff;
    color: #252525;

}

.form-input:focus {
    outline: none;
    border-color: #44b9da;
}

.error-message {
    color: #ff0000;
}

@keyframes wizzAnimation {
  0% { transform: translateX(-8px); }
  50% { transform: translateX(0); }
  100% { transform: translateX(-8px); }
}

.wizz-effect {
  animation: wizzAnimation 0.3s ease-in-out;
}
</style>
