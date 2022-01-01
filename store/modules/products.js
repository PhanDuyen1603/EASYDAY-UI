import { shopProducts, categories } from '../data'

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const state = () => ({
    products: [],
    curPage: [],
    loading: true,
    categories,
    productsCount: shopProducts.length,
    filters: {
        category: '',
        minPrice: 0,
        maxprice: 1000,
        tag: '',
        searchString: ''
    }
})

export const mutations = {
    SET_PRODUCTS: (state, value) => {
        state.products = value
        state.productsCount = value.length
    },
    SET_PRODUCTS_CURRENT_PAGE: (state, value) => {
        state.curPage = value
    },
    SET_LOADING: (state, value) => {
        state.loading = value
    },
    SET_FILTER: (state, { key, value }) => {
        state.filters[key] = value
    },
}

export const actions = {
    getAllProducts(context, payload) {
        context.commit('SET_PRODUCTS', shopProducts)
    },

    getRandomProducts(context, payload) {
        const numberProduct = 7
        const shuffled = shopProducts.sort(function(){return .5 - Math.random()});

        const selected=shuffled.slice(0,numberProduct);

        return selected.splice(0, numberProduct)
    },

    async getProducts(context, payload) {
        context.commit('SET_LOADING', true)
        await timeout(2000)
        const page = payload && payload.page ? payload.page : 1
        const offset = payload && payload.offset ? payload.offset : 16
        let data = []
        if (context.state.products.length > 0) {
            data = context.state.products.slice((page - 1) * offset, page * offset) 
        } else {
            context.commit('SET_PRODUCTS', shopProducts)
            data = shopProducts.slice((page - 1) * offset, page * offset)
        }
        context.commit('SET_PRODUCTS_CURRENT_PAGE', data)
        context.commit('SET_LOADING', false)
    },

    async filterProducts(context, payload) {
        context.commit('SET_LOADING', true)
        await timeout(2000)
        const page = 1
        const offset = 16
        const filters = payload && payload.filters ? payload.filters : {}
        if (Object.keys(filters).length !== 0) {
            for (const [key, value] of Object.entries(filters)) {
                context.commit('SET_FILTER', {key, value})
            }
        }
        let data = shopProducts

        // make filter
        const productFilter = context.state.filters
        data = productFilter.category ? 
            data.filter(product => product.categories.includes(productFilter.category)) : 
            data

        data = productFilter.minPrice && productFilter.maxprice ? 
            data.filter(product => product.price <= productFilter.maxprice && product.price >= productFilter.minPrice) : 
            data

        data = (productFilter.searchString && productFilter.searchString !== 'All') ? 
            data.filter(product => product.name.toLowerCase().includes(productFilter.searchString)) : 
            data
        // end make filter
        context.commit('SET_PRODUCTS', data)
        
        data = data.slice((page - 1) * offset, page * offset) 
        context.commit('SET_PRODUCTS_CURRENT_PAGE', data)
        context.commit('SET_LOADING', false)
    },

    async searchProduct(context, payload) {
        context.commit('SET_LOADING', true)
        const key = payload.keySearch
        await timeout(2000)
        const data = shopProducts.filter(item => {
            return item.name.toLowerCase().includes(key)
        })
        context.commit('SET_LOADING', false)
        context.commit('SET_PRODUCTS', data)
    },

    getProduct(context, payload) {
        const product = shopProducts.find(el => el.slug === payload.slug)
        console.log(product);
        return product
    }
}

export const getters = {
    products: (state) => state.curPage,
    allProducts: (state) => state.products,
    categories: (state) => state.categories,
    productsCount: (state) => state.productsCount,
    loading: (state) => state.loading,
}