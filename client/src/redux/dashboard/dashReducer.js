import { GET_ORDERS_COUNT, GET_USERS_COUNT} from './dashAction';
   
export const initialState = {
    usersCount: [],
  ordersCount: [],
};
   
   function dashReducer(state = initialState, action) {
       switch (action.type) {
           case GET_USERS_COUNT:
               {
                   return {
                       ...state,
                       usersCount: action.payload,
                   }
               }
               case GET_ORDERS_COUNT:
                {
                    let suma=0;
                    action.payload.forEach(element => {
                        let total= element.price * element.quantity;
                        suma=suma+ total
                    });
                    return {
                        ...state,
                        ordersCount: suma,
                    }
                }
               default:
                return state

    }

}

export default dashReducer;