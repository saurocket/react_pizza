import {AppStateType} from "./strore";
import {createSelector} from "reselect";

const getState = ((sate:AppStateType) => sate)

export const getBasket = createSelector(getState,(state):Array<SelectedBasketType> => {
  const oldArr = [...state.basketPage.basket]
  return state.basketPage.basket.filter(
        (item, index, array) =>
            index === array.findIndex(a => a.title === item.title && a.price === item.price)
    ).map(item => {
    let countItem = oldArr.filter(filterd => filterd.title === item.title && filterd.price === item.price).length
      return {
        count: countItem, ...item
      }
  })
})

export type SelectedBasketType = {
  id?: string
  title: string
  src: string
  price: number
  size: number
  dough: string
  count: number
}

