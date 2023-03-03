import { ActionTypes } from "../Constants/action-types";

export const SetProduct=(products)=>{

    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };

};
export const SelectedProduct=(product)=>{

    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    };

};
