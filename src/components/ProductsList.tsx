import {Product} from "./CardProduct/Product";
import {TopMainFileter} from "./TopFilter/TopMainFilter"

import {useSelector} from "react-redux";
import {AppStateType} from "../redux/strore";
import {sortedArrayProduct} from "./TopFilter/sortFunction/sortedArrayProduct";

const ProductsList = () => {
    const {products} = useSelector((state: AppStateType) => state.productPage)
    const sortValue = useSelector((state:AppStateType) =>{
        // @ts-ignore
       return  state.productPage.statusFilter.find(item => item.isChecked).value
    })
    const pizzaFilterByProductValue = useSelector((state: AppStateType) => {
        return state.productPage.pizzasFilter.find(product => product.isChecked === true)
    })
    return (
        <div className="content">
            <div className="container">
                <TopMainFileter/>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {/*@ts-ignore*/}
                    {sortedArrayProduct(products,pizzaFilterByProductValue.value,sortValue).map(product => {
                        return <Product key={product.id}
                                        title={product.title}
                                        id={product.id}
                                        dough={product.dough}
                                        minPrice={product.minPrice}
                                        size={product.size}
                                        src={product.src}
                                        type={product.type}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}
export {
    ProductsList
}