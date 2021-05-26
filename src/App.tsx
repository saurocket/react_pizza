import {Header} from "./components/Header/Header";

import React, {useEffect, useState} from "react";
import {ProductsList} from "./components/ProductsList";
import {Basket} from "./components/Bascket/Basket";
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import {MyOrder} from "./components/MyOrder/MyOrder";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/strore";




function App() {
    const isEmptyfromState = useSelector((state:AppStateType) => state.basketPage.isEmpty)
    const [isEmpty, setEmpty] = useState(false)

    useEffect(() => {
        setEmpty(isEmptyfromState)
        },[isEmptyfromState])
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                {!isEmpty && <Redirect to="/" />}
                       <Route path='/' exact>
                           <ProductsList/>
                       </Route>
                    <Route path='/basket'>
                        <Basket/>
                    </Route>
                    <Route path='/order'>
                        <MyOrder/>
                    </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
