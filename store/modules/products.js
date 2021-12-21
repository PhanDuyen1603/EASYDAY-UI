import { shopProducts, categories } from '../data'

export const state = () => ({
    products: [],
    categories,
    productsCount: shopProducts.length
})

export const mutations = {
    SET_PRODUCTS: (state, value) => {
        state.products = value
    },
}

export const actions = {
    getProducts(context, payload) {
        const page = payload && payload.page ? payload.page : 1
        const offset = payload && payload.offset ? payload.offset : 16
        const data = shopProducts.slice((page - 1) * offset, page * offset) 
        context.commit('SET_PRODUCTS', data)
    },

}

export const getters = {
    products: (state) => state.products,
    categories: (state) => state.categories,
    productsCount: (state) => state.productsCount,
}