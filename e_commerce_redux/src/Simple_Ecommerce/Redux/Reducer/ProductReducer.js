import { ActionTypes } from "../Constants/action-types";

const InitialState={
    products:[{
        id:1,
        title:"prem",
        category:"Programmer"

    }]
}

export const ProductReducer=(state=InitialState, {type, payload})=>{

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            
            return state
    
        default:
            return state
    }

}