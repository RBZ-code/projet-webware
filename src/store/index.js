import { createStore } from "vuex";

function getLastUser() {
    let lastUser = localStorage.getItem("lastUserId");
    return lastUser ? parseInt(lastUser) : 0;
}

export default createStore({
    state: {
        lastProductID: 20,
        currentUser: null,
        contact: [],
        users: [],
        lastUser: getLastUser(),
        selectedProduct: null,
        productsAdd: [],
        products: [],

        prospects: localStorage.getItem("prospects")
            ? JSON.parse(localStorage.getItem("prospects"))
            : [],

        categories: localStorage.getItem("copiedCategories")
            ? JSON.parse(localStorage.getItem("copiedCategories"))
            : [
                  { id: 3, name: "Mobilier d'intérieur" },
                  { id: 2, name: "Luminaires" },
                  { id: 4, name: "Tapis" },
                  { id: 1, name: "Objets de décorations" },
              ],

        produits: localStorage.getItem("copiedProduits")
            ? JSON.parse(localStorage.getItem("copiedProduits"))
            : [
                  {
                      id: 1,
                      image: require("../assets/deco-1.jpg"),
                      titre: "Vase éthnique en argile",
                      description:
                          "Vase éthnique en argile avec motifs gravés à la main.",
                      prix: 49.99,
                      moq: 5,
                      categorieId: 1,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 2,
                      image: require("../assets/deco-2.jpg"),
                      titre: "Vase éthnique en argile 2",
                      description:
                          "Vase éthnique en argile avec motifs gravés à la main.",
                      prix: 59.99,
                      moq: 10,
                      categorieId: 1,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 3,
                      image: require("../assets/deco-3.jpg"),
                      titre: "Vase éthnique en argile 3",
                      description:
                          "Vase éthnique en argile avec motifs gravés à la main.",
                      prix: 69.99,
                      moq: 15,
                      categorieId: 1,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 4,
                      image: require("../assets/deco-4.jpg"),
                      titre: "Vase éthnique en argile 4",
                      description:
                          "Vase éthnique en argile avec motifs gravés à la main.",
                      prix: 79.99,
                      moq: 20,
                      categorieId: 1,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 5,
                      image: require("../assets/deco-5.jpg"),
                      titre: "Vase éthnique en argile 5",
                      description:
                          "Vase éthnique en argile avec motifs gravés à la main.",
                      prix: 89.99,
                      moq: 25,
                      categorieId: 1,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 6,
                      image: require("../assets/luminaire-1.jpg"),
                      titre: "Lampe moderne",
                      description:
                          "Lampe avec un design moderne et éclairage ajustable.",
                      prix: 129.99,
                      moq: 5,
                      categorieId: 2,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 7,
                      image: require("../assets/luminaire-2.jpg"),
                      titre: "Lampe moderne",
                      description:
                          "Lampe avec un design moderne et éclairage ajustable.",
                      prix: 139.99,
                      moq: 10,
                      categorieId: 2,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 8,
                      image: require("../assets/luminaire-3.jpg"),
                      titre: "Lampe moderne",
                      description:
                          "Lampe avec un design moderne et éclairage ajustable.",
                      prix: 149.99,
                      moq: 15,
                      categorieId: 2,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 9,
                      image: require("../assets/luminaire-4.jpg"),
                      titre: "Lampe moderne",
                      description:
                          "Lampe avec un design moderne et éclairage ajustable.",
                      prix: 159.99,
                      moq: 20,
                      categorieId: 2,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 10,
                      image: require("../assets/luminaire-5.jpg"),
                      titre: "Lampe moderne",
                      description:
                          "Lampe avec un design moderne et éclairage ajustable.",
                      prix: 169.99,
                      moq: 25,
                      categorieId: 2,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 11,
                      image: require("../assets/mobilier-1.jpg"),
                      titre: "Table à manger en bois",
                      description:
                          "Table à manger en bois massif avec finition élégante.",
                      prix: 299.99,
                      moq: 5,
                      categorieId: 3,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 12,
                      image: require("../assets/mobilier-2.jpg"),
                      titre: "Table à manger en bois",
                      description:
                          "Table à manger en bois massif avec finition élégante.",
                      prix: 289.99,
                      moq: 10,
                      categorieId: 3,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 13,
                      image: require("../assets/mobilier-3.jpg"),
                      titre: "Table à manger en bois",
                      description:
                          "Table à manger en bois massif avec finition élégante.",
                      prix: 279.99,
                      moq: 15,
                      categorieId: 3,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 14,
                      image: require("../assets/mobilier-4.jpg"),
                      titre: "Table à manger en bois",
                      description:
                          "Table à manger en bois massif avec finition élégante.",
                      prix: 269.99,
                      moq: 20,
                      categorieId: 3,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 15,
                      image: require("../assets/mobilier-5.jpg"),
                      titre: "Table à manger en bois",
                      description:
                          "Table à manger en bois massif avec finition élégante.",
                      prix: 259.99,
                      moq: 25,
                      categorieId: 3,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 16,
                      image: require("../assets/tapis-1.jpg"),
                      titre: "Tapis en laine",
                      description:
                          "Tapis doux en laine avec motif géométrique.",
                      prix: 89.99,
                      moq: 5,
                      categorieId: 4,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 17,
                      image: require("../assets/tapis-2.jpg"),
                      titre: "Tapis en laine",
                      description:
                          "Tapis doux en laine avec motif géométrique.",
                      prix: 79.99,
                      moq: 10,
                      categorieId: 4,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 18,
                      image: require("../assets/tapis-3.jpg"),
                      titre: "Tapis en laine",
                      description:
                          "Tapis doux en laine avec motif géométrique.",
                      prix: 69.99,
                      moq: 15,
                      categorieId: 4,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 19,
                      image: require("../assets/tapis-4.jpg"),
                      titre: "Tapis en laine",
                      description:
                          "Tapis doux en laine avec motif géométrique.",
                      prix: 59.99,
                      moq: 20,
                      categorieId: 4,
                      stock: 50,
                      disponibilite: true,
                  },
                  {
                      id: 20,
                      image: require("../assets/tapis-5.jpg"),
                      titre: "Tapis en laine",
                      description:
                          "Tapis doux en laine avec motif géométrique.",
                      prix: 99.99,
                      moq: 25,
                      categorieId: 4,
                      stock: 50,
                      disponibilite: true,
                  },
              ],

        commandes: localStorage.getItem("order")
            ? JSON.parse(localStorage.getItem("order"))
            : [],
    },
    mutations: {
        validerCommande(state) {
            const currentUser = state.currentUser;

            if (
                currentUser &&
                currentUser.panier &&
                currentUser.panier.length > 0
            ) {
                const coutTotalHT = currentUser.panier.reduce(
                    (total, prod) => total + prod.prix * prod.quantity,
                    0
                );

                const coutTotalTTC = coutTotalHT * 1.2;

                const commande = {
                    id: state.commandes.length + 1,
                    produits: currentUser.panier.map((prod) => ({
                        produitId: prod.id,
                        quantite: prod.quantity,
                    })),
                    coutTotal: coutTotalTTC.toFixed(2),
                    coutTotalHT: coutTotalHT.toFixed(2),
                    userId: currentUser.id,
                    raisonSociale: currentUser.raisonSociale,
                    toBeDelivered: true,
                    adresse: currentUser.adresse,
                    isCommandSent: false,
                };

                state.commandes.push(commande);

                localStorage.setItem("order", JSON.stringify(state.commandes));

                currentUser.panier = [];
                localStorage.setItem(
                    `user_${currentUser.id}`,
                    JSON.stringify(currentUser)
                );
                state.showThankYouModal = true;
            }
        },

        ajouterAuPanier(state, produit) {
            const utilisateur = state.currentUser;

            if (utilisateur && utilisateur.panier) {
                const produitExistant = utilisateur.panier.find(
                    (p) => p.id === produit.id
                );

                if (produitExistant) {
                    produitExistant.quantity++;
                } else {
                    produit.quantity = produit.moq;
                    utilisateur.panier.push(produit);
                }

                localStorage.setItem(
                    `user_${utilisateur.id}`,
                    JSON.stringify(utilisateur)
                );

                state.currentUser = { ...utilisateur };
            } else {
                console.error("Utilisateur ou panier non défini.");
                console.log(state.currentUser);
            }
        },

        updateQuantity(state, { productId, changement }) {
            const utilisateur = state.currentUser;
            if (utilisateur && utilisateur.panier) {
                const produit = utilisateur.panier.find(
                    (p) => p.id === productId
                );
                if (produit) {
                    produit.quantity += changement;
                    if (produit.quantity < 0) {
                        produit.quantity = 0;
                    }

                    localStorage.setItem(
                        `user_${utilisateur.id}`,
                        JSON.stringify(utilisateur)
                    );
                }
            }
        },

        supprimerDuPanier(state, produitId) {
            const utilisateur = state.currentUser;

            if (utilisateur && utilisateur.panier) {
                const index = utilisateur.panier.findIndex(
                    (p) => p.id === produitId
                );

                if (index !== -1) {
                    utilisateur.panier.splice(index, 1);
                    localStorage.setItem(
                        `user_${utilisateur.id}`,
                        JSON.stringify(utilisateur)
                    );
                    state.currentUser = { ...utilisateur };
                }
            }
        },
        // Utilisateurs

        setUserConnected(state, user) {
            state.currentUser = user;

            if (user && user.id !== null && user.id !== undefined) {
                const storedUser = localStorage.getItem(`user_${user.id}`);

                if (storedUser) {
                    state.currentUser = JSON.parse(storedUser);

                    if (!state.currentUser.panier) {
                        state.currentUser.panier = [];
                    }
                }
            }
        },

        addUser(state, user) {
            state.lastUser += 1;
            user.id = state.lastUser;
            user.role = "user";
            user.panier = [];
            localStorage.setItem(`user_${user.id}`, JSON.stringify(user));
            localStorage.setItem("lastUserId", state.lastUser);
        },

        setUsers(state, user) {
            state.users = user;
        },

        changeUserRole(state, { index, newRole }) {
            if (index >= 0 && index < state.users.length) {
                state.users[index].role = newRole;

                localStorage.setItem(
                    `user_${state.users[index].id}`,
                    JSON.stringify(state.users[index])
                );
            }
        },

        // Produits

        addProduct(state, item) {
            state.lastProductID += 1;
            item.id = state.lastProductID;
            state.produits.unshift(item);
        },

        deleteProduct(state, productId) {
            state.produits = state.produits.filter(
                (prod) => prod.id !== productId
            );
        },

        updateProduct(state, updatedProduct) {
            const index = state.produits.findIndex(
                (prod) => prod.id === updatedProduct.id
            );

            if (index !== -1) {
                state.produits.splice(index, 1, updatedProduct);
                localStorage.setItem(
                    "copiedProduits",
                    JSON.stringify(state.produits)
                );
            }
        },

        saveProducts(state) {
            localStorage.setItem(
                "copiedProduits",
                JSON.stringify(state.produits)
            );
        },

        setProducts(state, products) {
            state.produits = products;
        },

        // Catégories

        addCat(state, item) {
            state.categories.push(item);
        },

        saveCat(state) {
            localStorage.setItem(
                "copiedCategories",
                JSON.stringify(state.categories)
            );
        },
        setCategories(state, categories) {
            state.categories = categories;
        },

        deleteCat(state, catId) {
            state.categories = state.categories.filter(
                (cat) => cat.id !== catId
            );
            localStorage.setItem(
                "copiedCategories",
                JSON.stringify(state.categories)
            );
        },

        updateCat(state, updatedCategory) {
            const index = state.categories.findIndex(
                (cat) => cat.id === updatedCategory.id
            );

            if (index !== -1) {
                state.categories[index].name = updatedCategory.name;

                localStorage.setItem(
                    "copiedCategories",
                    JSON.stringify(state.categories)
                );
            }
        },
        // Commandes

        changeOrderStatus(state, orderId) {
            state.commandes[orderId - 1].isCommandSent = true;
            localStorage.setItem("order", JSON.stringify(state.commandes));
        },
        setSelectedProduct(state, product) {
            state.selectedProduct = product;
        },
    },
    actions: {
        updateProduct(context, productId) {
            context.commit("updateProduct", productId);
        },

        deleteProduct(context, productId) {
            context.commit("deleteProduct", productId);
        },
        deleteCat(context, catId) {
            context.commit("deleteCat", catId);
        },

        async loadUsers(context) {
            try {
                let users = Object.keys(localStorage)
                    .filter((key) => key.startsWith("user_"))
                    .map((key) => JSON.parse(localStorage.getItem(key)));

                const masterUser = {
                    id: -1,
                    raisonSociale: "Master",
                    siret: "12345678901234",
                    password: "12345678901234",
                    role: "admin",
                    panier: [],
                };

                users.push(masterUser);

                context.commit("setUsers", users);

                const connectedUserId = localStorage.getItem("connectedUserId");
                if (connectedUserId) {
                    const connectedUser = users.find(
                        (user) => user.id === parseInt(connectedUserId)
                    );

                    if (connectedUser) {
                        connectedUser.id = parseInt(connectedUserId);

                        context.commit("setUserConnected", connectedUser);
                    }
                }
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des utilisateurs :",
                    error
                );
            }
        },

        async loadCategories(context) {
            try {
                let categoriesStockees =
                    localStorage.getItem("copiedCategories");

                if (categoriesStockees) {
                    let categories = JSON.parse(categoriesStockees);

                    context.commit("setCategories", categories);
                } else {
                    let defaultCategories = [
                        { id: 3, name: "Mobilier d'intérieur" },
                        { id: 2, name: "Luminaires" },
                        { id: 4, name: "Tapis" },
                        { id: 1, name: "Objets de décorations" },
                    ];

                    context.commit("setCategories", defaultCategories);

                    localStorage.setItem(
                        "copiedCategories",
                        JSON.stringify(defaultCategories)
                    );
                }
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des catégories :",
                    error
                );
            }
        },
        async loadProduits(context) {
            try {
                let produitsStockes = localStorage.getItem("copiedProduits");

                if (produitsStockes) {
                    let produits = JSON.parse(produitsStockes);

                    context.commit("setProducts", produits);
                }
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des produits :",
                    error
                );
            }
        },
    },

    getters: {
        filteredUsers(state) {
            if (!state.query) return state.produits;
            let query = state.query.toLowerCase();
            return state.produits.filter((prod) =>
                prod.titre.toLowerCase().includes(query)
            );
        },
    },
});
