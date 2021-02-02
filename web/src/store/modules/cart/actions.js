function addToCartRequest (id) {

    return {

        type: '@cart/ADD_REQUEST',
        id

    };

}

export { addToCartRequest };

function addToCartSuccess (product) {

    return {

        type: '@cart/ADD_SUCCESS',
        product

    };

}

export { addToCartSuccess };

function removeFromCart (id) {

    return {

        type: '@cart/REMOVE',
        id

    };

}

export { removeFromCart };

function clearCart () {

    return {
        
        type: '@cart/CLEAR-CART'

    }

}

export { clearCart };