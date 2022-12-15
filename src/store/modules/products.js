import shop from '@/api/shop'

export default {
  state: {
    items: [],
  },

  getters: {
    availableProducts(state, getters) {
      return state.items.filter(product => product.inventory > 0)
    },

    productIsInStock() {
      return (product) => {
        return product.inventory > 0
      }
    },
  },

  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve, reject) => {
        // make the call
        // call setProducts mutation
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
  },

  mutations: {
    setProducts(state, products) {
      state.items = products
    },

    decrementProductInventory(state, product) {
      product.inventory--
    },
  },
}