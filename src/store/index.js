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
                  },
              ],

        commandes: [
            {
                id: 1,
                produits: [
                    { produitId: 1, quantite: 2 },
                    { produitId: 3, quantite: 1 },
                ],
                coutTotal: 689.97,
                userId: 1,
                toBeDelivered: true,
            },
            {
                id: 2,
                produits: [
                    { produitId: 2, quantite: 1 },
                    { produitId: 4, quantite: 3 },
                ],
                coutTotal: 539.96,
                userId: 2,
                toBeDelivered: false,
            },
        ],
    },
    mutations: {
        // Utilisateurs

        setUserConnected(state, userId) {
            state.currentUser = userId;
        },

        addUser(state, user) {
            state.lastUser += 1;
            user.id = state.lastUser;
            user.role = "user";
            localStorage.setItem(`user_${user.id}`, JSON.stringify(user));
            localStorage.setItem("lastUserId", state.lastUser);
        },
        addCatlocal(state, user) {
            state.lastCatId += 1;
            user.id = state.lastCatId;
            user.connected = false;
            localStorage.setItem(user.id, JSON.stringify(user));
            localStorage.setItem("lastCatId", state.lastCatId);
        },

        setUsers(state, user) {
            state.users = user;
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
            localStorage.setItem(
                "copiedProduits",
                JSON.stringify(state.produits)
            );
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

        // Commandes

        changeOrderStatus(state, orderId) {
            state.commandes[orderId - 1].toBeDelivered = false;
        },
    },
    actions: {
        updateProduct(context, productId) {
            context.commit("updateProduct", productId);
        },

        deleteProduct(context, productId) {
            context.commit("deleteProduct", productId);
        },

        async loadUsers(context) {
            try {
                let users = Object.keys(localStorage)
                    .filter((key) => key.startsWith("user_"))
                    .map((key) => JSON.parse(localStorage.getItem(key)));

                context.commit("setUsers", users);

                const connectedUserId = localStorage.getItem("connectedUserId");
                if (connectedUserId) {
                    context.commit(
                        "setUserConnected",
                        parseInt(connectedUserId)
                    );
                }
            } catch (error) {
                console.error(
                    "Une erreur s'est produite lors du chargement des utilisateurs:",
                    error
                );
            }
        },

        loadCategories(context) {
            let categoriesStockees = localStorage.getItem("copiedCategories");

            if (categoriesStockees) {
                let categories = JSON.parse(categoriesStockees);

                context.commit("setCategories", categories);
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
