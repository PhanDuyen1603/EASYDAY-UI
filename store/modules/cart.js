// import { shopProducts, categories } from '../data'

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const state = () => ({
    items: [{
        "name": "Wrapped Cabbage",
        "id": 0,
        "price": "782.92",
        "rating": 3,
        "sale": "",
        quantity: 1,
        "slug": "wrapped-cabbage"
    }],
    checkoutStatus: null,
    savedItem: [],
    totalPrice: 0,
    cartModal: false
})

export const mutations = {
    SET_PRODUCT_TO_CART(state, value) {
        const product = state.items.find(item => item.id === value.id)
        if(product) {
            product.quantity++
        } else {
            value.quantity = 1
            state.items.push(value)
        }
    },
    REMOVE_PRODUCT(state, value) {
        const product = state.items.find(item => item.id === value.id)
        product.quantity--
    },
    SET_CHECKOUT_STATUS(state, status) {
        state.checkoutStatus = status
    },
    SET_CART_MODAL_STATUS(state, status) {
        state.cartModal = status
    }
    
}

export const actions = {
    async addProductToCart(context, payload) {
        context.commit('SET_CHECKOUT_STATUS', null)
        await  timeout(2000)
        context.commit('SET_PRODUCT_TO_CART', payload.product)
        context.commit('SET_CART_MODAL_STATUS', true)
        console.log(context.state);
    },
    async removeProductInCart(context, payload) {
        await timeout(2000)
        context.commit('REMOVE_PRODUCT', payload)
        context.commit('SET_CART_MODAL_STATUS', true)

    },
    // checkout(context, payload) {
    //     const savedCartItems = [...context.state.items]
    //     context.commit('setCheckoutStatus', null)
    // }
}

export const getters = {
    items: (state) => state.items,
    cartModal: (state) => state.cartModal,
    totalPrice: (state, getters) => {
        console.log(1,getters.items);
        if(state.items.length === 0) return 0
        return state.items.reduce((total, product) => {
            return total + +product.price * +product.quantity
        }, 0)
    }
}

