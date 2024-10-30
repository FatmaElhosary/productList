import { createFeature, createReducer, on } from "@ngrx/store";
import { ProductsStateInterface } from "../types/productsState.interface";
import { productsActions } from "./actions";

const initialState:ProductsStateInterface={
    isLoading:false,
    data:null,
    error:null,
}
const productsFeature=createFeature({
    name:'products',
    reducer:createReducer(
        initialState,
        on(productsActions.getProducts,(state)=>
            ({...state,isLoading:true})
        ),
        on(productsActions.getProductsSuccess,(state,action)=>
        ({
            ...state,
            isLoading:false,
            data:action.products
        })
        
        ),
        on(productsActions.getProductsFailure,(state)=>
        ({...state,isLoading:false})
        ),
    )
})


export const{
    name:productsFeatureKey,
    reducer:productsReducer,
    selectIsLoading,
    selectError,
    selectData:selectproductsData,

}=productsFeature;