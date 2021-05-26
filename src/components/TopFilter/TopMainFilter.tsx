import {ProductFilter} from "./ProductFilter";
import {LowFilter} from "./LowFilter";

const TopMainFileter = () => {
    return (
        <div className="content__top">
            <div className="categories">
                <ProductFilter/>
            </div>
            <LowFilter/>
        </div>
    )
}

export {
    TopMainFileter
}