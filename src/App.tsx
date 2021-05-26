import {Header} from "./components/Header/Header";

import React from "react";
import {ProductsList} from "./components/ProductsList";
import {Basket} from "./components/Bascket/Basket";
import {BrowserRouter, Route} from 'react-router-dom'
import {MyOrder} from "./components/MyOrder/MyOrder";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
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
