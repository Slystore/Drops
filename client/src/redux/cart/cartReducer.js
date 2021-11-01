import { ADD_TO_CART, GET_PRODUCTS } from "./cartActions"



export const initialState = {
    cart: [],
    products: [],
}

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
             let newItem = state.products.find((product) => product.id === action.payload);
            let iteminCart = state.cart.find((item) => item.id === newItem.id)
            
            return iteminCart ? {
                ...state,
                cart: state.cart.map((item) => item.id === newItem.id ? {...item, quantity: item.quantity + 1 } 
                : item),
            } : {
                ...state,
                cart: [...state.cart, {...newItem, quantity: 1 }],
            }
            case GET_PRODUCTS:
               {
                   return {
                       ...state,
                       products: action.payload,
                   }
               }
        default:
            return state
    }
}

export default cartReducer;