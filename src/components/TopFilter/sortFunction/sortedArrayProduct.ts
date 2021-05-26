import { ProductType } from "../../../redux/productsReducer"


export const sortedArrayProduct  = (products:Array<ProductType>,pizzaFilterByProductValue:string,sortValue:string) => {
  const sortedArrayProduct = products.filter(product => {
        if (pizzaFilterByProductValue === 'all') {
            return true
        }
        if (product.type.includes(pizzaFilterByProductValue)) {
            return true
        }
    })
    if (sortValue === 'price'){
        sortedArrayProduct.sort((a,b)=> a.minPrice - b.minPrice)
    }
    if (sortValue === 'alphabet'){
        sortedArrayProduct.sort((a,b) => {
            return  a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        })
    }
    return sortedArrayProduct
}
