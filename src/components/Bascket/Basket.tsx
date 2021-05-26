
import React from "react";
import {FullBascket} from "./Items/CardItem/FullBasecket";
import {EmptyBascket} from "./Items/CardItem/EmptyBascket";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/strore";
const Basket = () => {
    const {isEmpty} = useSelector((state:AppStateType ) =>state.basketPage)


    return (
            <div className="content">
                <div className="container container--cart">
                    {isEmpty ?  <FullBascket/> : <EmptyBascket/>}
                </div>
            </div>
    )
}
export {
    Basket
}