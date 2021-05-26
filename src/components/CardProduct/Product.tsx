import React, {useCallback, useEffect, useState} from 'react'
import {ProductType} from "../../redux/productsReducer";
import { AddPizzaBtn } from './AddPizzaBtn';



const Product: React.FC<ProductType> = (props) => {


    const {title, src, minPrice, size, dough,} = props
    const arrSizePizzas = Object.values(size)


    const [pizza, setPizza] = useState({
        title: title,
        src: src,
        price: minPrice,
        size: size.small,
        dough: dough.thin,
    })

    const countPrise = useCallback(() => {
        let ratioSize = 1;
        if (pizza.size !== size.small) {
            ratioSize = +pizza.size === +size.medium ? 1.2 : 1.4
        }
        let ratioDough = pizza.dough === dough.thin ? 1 : 1.2
        const newPrice = Math.floor(minPrice * ratioSize * ratioDough)

        if (newPrice === pizza.price){
            return
        }
        setPizza({...pizza, price: newPrice})
    },[pizza])

    useEffect(()=> {
        countPrise()

    },[pizza])





    const onChangeForm = (popsName: string, content: string | number) => {
        setPizza((prevState => {
            return {...prevState, [popsName]: content}
        }))
    }

    return (
        <div className="pizza-block">
            <img
                width={200 + 'px'}
                height={200 + 'px'}
                className="pizza-block__image"
                src={src}
                alt="Pizza"
            />
            <h4
                onClick={() => {
                    onChangeForm('title', title)
                }}
                className="pizza-block__title"
            >{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {Object.values(dough).map(item => {
                        return <li
                            key={item}
                            className={item === pizza.dough ? 'active' : ''}
                            onClick={() => onChangeForm('dough', item)}
                        >
                            {item}</li>
                    })}
                </ul>
                <ul>
                    {arrSizePizzas.map(item => {
                        return <li
                            key={item}
                            className={item === pizza.size ? 'active' : ''}
                            onClick={() => onChangeForm('size', item)}
                        >
                            {item} см.
                        </li>
                    })}
                </ul>
            </div>
            <AddPizzaBtn pizza={pizza}/>
        </div>
    )
}
export {
    Product
}

