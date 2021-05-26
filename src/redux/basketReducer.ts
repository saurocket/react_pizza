import {InferActionTypes} from "./strore";
import {comparePiazza} from "./HelperFunctions/HelperForBasketReducer";

const initialState = {
    isEmpty: false,
    totalPrice: 0,
    totalProductCount: 0,
    basket: [] as Array<BasketType>,
}

export const basketReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_PRODUCT_IN_BASKET": {
            const newProduct = {
                id: Date.now().toString(),
                count: 1,
                ...action.product
            }
            const compareProduct =  comparePiazza(state.basket, newProduct)
            if(compareProduct !== undefined){
                let countPizza = compareProduct.count ? compareProduct.count + 1 : 1
                compareProduct.count = countPizza
                return {
                    ...state,
                    basket: [...state.basket.filter(i => i.id !== compareProduct.id),
                        compareProduct
                    ],

                    totalPrice: state.totalPrice + newProduct.price,
                    totalProductCount: state.basket.reduce((coutner, item)=>{
                        if (item.count){
                            return coutner + item.count
                        }else return coutner
                    },0),
                    isEmpty: true,
                };
            }else {
                return {
                    ...state,
                    basket: [...state.basket, {...newProduct, count: 1}],
                    totalPrice: state.totalPrice + newProduct.price,
                    totalProductCount: state.totalProductCount + 1,
                    isEmpty: true,
                };
            }
        }
        case "CLEAR_PRODUCT": {
            return {
                ...state, ...initialState
            }
        }
        case "ADD_PRODUCT_BY_BASKET": {
            const updateProduct = state.basket.find( i => i.id === action.id)
            if (!updateProduct) {
                return state
            }
            if (!updateProduct.count) {
                return state
            }
            updateProduct.count = updateProduct.count + 1
            return {
                ...state, basket: [...state.basket.filter(i => i.id !== action.id), updateProduct],
                totalPrice: state.totalPrice + updateProduct.price,
                totalProductCount: state.totalProductCount + 1
            }
        }
        case "REMOVE_PRODUCT_BY_BASKET": {
            const updateProduct = state.basket.find( i => i.id === action.id)
            if (!updateProduct) {
                return state
            }
            if (!updateProduct.count) {
                return state
            }
           updateProduct.count = updateProduct.count -1
            if (updateProduct.count === 0){
                return {
                    ...state, basket: [...state.basket.filter(i => i.id !== action.id)],
                    totalPrice: state.totalPrice - updateProduct.price,
                    totalProductCount: state.totalProductCount -1
                }
            }
            return {
                ...state, basket: [...state.basket.filter(i => i.id !== action.id), updateProduct],
                totalPrice: state.totalPrice - updateProduct.price,
                totalProductCount: state.totalProductCount -1
            }

        }

        default:
            return state
    }

}


export const actions = {
    setProductInBasket: (product: BasketType) => {
        return ({type: 'SET_PRODUCT_IN_BASKET', product} as const)
    },
    clearBasket: () => {
        return ({type: 'CLEAR_PRODUCT'} as const)
    },
    addProduct: (id: number | string) => {
        return ({type: 'ADD_PRODUCT_BY_BASKET', id} as const)
    },
    removeProduct: (id: number | string) => {
        return ({type: 'REMOVE_PRODUCT_BY_BASKET', id} as const)
    },
    setCountByChangedPizza: (payload:BasketType) => {
        return ({type: 'COUNT_CHANGED-PIZZA', payload} as const)
    }
}


export type InitialStateType = typeof initialState
export type BasketType = {
    id?: string
    title: string
    src: string
    price: number
    size: number
    dough: string
    count?: number
}
type ActionsType = InferActionTypes<typeof actions>



