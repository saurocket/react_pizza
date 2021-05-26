import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/strore";
import classNames from 'classnames'
import {actions} from '../../redux/productsReducer'

const ProductFilter:React.FC = () => {
    const dispatch = useDispatch()

   const productFilter = useSelector((state:AppStateType) => state.productPage.pizzasFilter)
    const onChangeFilterByProduct = useCallback(((value:string) => {
        dispatch(actions.setFilterByProduct(value))
    }),[dispatch])
    return (
        <ul>
            {productFilter.map(product => {
              return (
                  <li
                      key={product.id}
                      className={classNames({
                      'active' : product.isChecked
                  })}
                    onClick={() => onChangeFilterByProduct(product.value)}
                  >{product.title}</li>
              )
            })}


        </ul>
    )
}
export {
    ProductFilter
}