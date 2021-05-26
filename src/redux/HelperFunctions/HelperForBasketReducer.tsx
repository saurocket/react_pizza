
import {BasketType} from "../basketReducer";

export const comparePiazza = (basket:Array<BasketType>, currentPizza:BasketType) => {
   return  basket.find(pizza => pizza.title === currentPizza.title
        &&  pizza.price === currentPizza.price && pizza.dough === currentPizza.dough
        && pizza.size === currentPizza.size)
}

