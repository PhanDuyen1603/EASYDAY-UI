import { shopProducts, categories } from '../data'

export const state = () => ({
    products: [],
    loading: true,
    categories,
    productsCount: shopProducts.length,
})

export const mutations = {
    SET_PRODUCTS: (state, value) => {
        state.products = value
    },
    SET_PRODUCTS_COUNT: (state, value) => {
        state.productsCount = value
    },
    SET_LOADING: (state, value) => {
        state.loading = value
    },
}

export const actions = {
    getProducts(context, payload) {
        context.commit('SET_LOADING', true)
        const page = payload && payload.page ? payload.page : 1
        const offset = payload && payload.offset ? payload.offset : 16
        let data = []
        if (context.state.products.length > 0) {
            data = context.state.products.slice((page - 1) * offset, page * offset) 
        } else {
            data = shopProducts.slice((page - 1) * offset, page * offset) 
        }
        context.commit('SET_PRODUCTS', data)
        context.commit('SET_LOADING', false)
    },
    // getProductsByPage(context, payload) {
    //     const page = payload && payload.page ? payload.page : 1
    //     const offset = payload && payload.offset ? payload.offset : 16
    // },
    getProductsByCategory(context, payload) {
        const category = payload.category
        const data = shopProducts.filter(item => {
            return item.categories.includes(category)
        })
        context.commit('SET_PRODUCTS', data)
    },
    getProductsByPrice(context, payload) {
        const minPrice = payload.min
        const maxprice = payload.max
        const data = shopProducts.filter(item => {
            return item.price <= maxprice && item.price >= minPrice
        })
        context.commit('SET_PRODUCTS', data)
        context.commit('SET_PRODUCTS_COUNT', data.length)
    },
    searchProduct(context, payload) {
        const key = payload.keySearch
        const data = shopProducts.filter(item => {
            return item.name.toLowerCase().includes(key)
        })
        context.commit('SET_PRODUCTS', data)
        context.commit('SET_PRODUCTS_COUNT', data.length)
    }
}

export const getters = {
    products: (state) => state.products,
    categories: (state) => state.categories,
    productsCount: (state) => state.productsCount,
    loading: (state) => state.loading,
}