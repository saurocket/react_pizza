import {productsData} from "../data/products";
import {InferActionTypes} from "./strore";
const initialState = {
    statusFilter:[
        {value: 'price', title: 'цене', isChecked: true} ,
        {value: 'alphabet', title: 'по алфавиту', isChecked:false}
        ] as Array<StatusFilterType>,
    pizzasFilter: [
        {id: '1', title: 'Все', isChecked: true, value: 'all'},
        {id: '2', title: 'Мясные', isChecked: false, value: 'meat'},
        {id: '3', title: 'Вегетарианская', isChecked: false, value: 'vegan'},
        {id: '4', title: 'Гриль', isChecked: false, value: 'grill'},
        {id: '5', title: 'Острые', isChecked: false, value: 'hot'},
        {id: '6', title: 'Закрытые', isChecked: false, value: 'closet'},
    ] as Array<FilterProductType>,
    products: productsData as Array<ProductType>
}


export const productReducer = (state = initialState, action:ActionType):InitialStateType => {
    switch (action.type) {
        case "SET_FILTER_BY_PRODUCT": {
            return {
                ...state,
                pizzasFilter: [...state.pizzasFilter.map(item => {
                    action.value === item.value ? item.isChecked = true : item.isChecked = false
                    return item
                })],
            }
        }
        case "SET_FILTER_BY_PRISE": {
            return {...state,
                    statusFilter: [...state.statusFilter.map(item => {
                        action.value === item.value ? item.isChecked = true : item.isChecked = false
                        return item
                    })]
            }
        }
        default: return state
    }
}
export const actions = {
    setFilterByProduct: (value:string) =>({type: "SET_FILTER_BY_PRODUCT",value}) as const,
    setFilterByPrice: (value:string) => ({type: "SET_FILTER_BY_PRISE", value}) as const,

}
type InitialStateType = typeof initialState
type ActionType = InferActionTypes<typeof actions>


export type ProductType = {
    id: string,
    src: string,
    title: string,
    dough: {thin: string, thick: string},
    size: {small: number, medium: number, large: number},
    minPrice: number,
    type: string
}
export type FilterProductType = {
    id: string,
    title: string,
    isChecked: boolean,
    value: string
}
export type StatusFilterType = {
    value: string,
    title: string,
    isChecked: boolean
}



















