function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const state = () => ({
    items: [],
    checkoutStatus: null,
    savedItem: [],
    totalPrice: 0,
})

export const mutations = {
    SET_PRODUCT_TO_CART(state, value) {
        value.quantity = 1
        state.items.push(value)
    },
    DELETE_PRODUCT(state, value) {
        const index = state.items.findIndex(item => item.id === value.id)
        state.items.splice(index, 1)
    },
    DECREASE_PRODUCT_QUANTITY(state, value) {
        const product = state.items.find(item => item.id === value.id)
        if(product.quantity > 0) product.quantity--
    },
    INCREASE_PRODUCT_QUANTITY(state, value) {
        const product = state.items.find(item => item.id === value.id)
        product.quantity++
    },
    SET_CHECKOUT_STATUS(state, status) {
        state.checkoutStatus = status
    },
    SET_TOTAL_PRICE(state, status) {
        const price = state.items.reduce((total, product) => {
            return total + +product.price * +product.quantity
        }, 0)
        state.totalPrice = price
    },
}

export const actions = {
    async addProductToCart(context, payload) {
        context.commit('SET_CHECKOUT_STATUS', null)
        await timeout(2000)
        const product = context.state.items.find(item => item.id === payload.product.id)
        if (product) {
            context.commit('INCREASE_PRODUCT_QUANTITY', payload.product)
        }else {
            context.commit('SET_PRODUCT_TO_CART', payload.product)
        }
        context.commit('SET_TOTAL_PRICE')
    },
    async removeProductInCart(context, payload) {
        await timeout(2000)
        context.commit('DECREASE_PRODUCT_QUANTITY', payload)
        context.commit('SET_TOTAL_PRICE')
    },
    async increaseQuantity(context, payload) {
        await timeout(2000)
        context.commit('SET_TOTAL_PRICE')
    }
}

export const getters = {
    items: (state) => state.items,
    cartModal: (state) => state.cartModal,
    totalPrice: (state) => +state.totalPrice.toFixed(2)
}

