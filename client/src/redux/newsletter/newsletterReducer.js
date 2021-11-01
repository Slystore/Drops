

import { POST_NEWSLETTER } from './newsletterActions';
   
export const initialState = {
    newsletter: {}
};
   
   function newsletterReducer (state = initialState, action) {
       switch (action.type) {
           case POST_NEWSLETTER:
               {
                   return { ...state }
               }
               default:
                   return state
       }
   }
   
   export default newsletterReducer;