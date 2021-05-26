import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/strore";
import {useState} from "react";


export const MyOrder = () => {
    const {basket, totalPrice, totalProductCount} = useSelector((state: AppStateType) => state.basketPage)

    const [data] = useState({
        basket: basket,
        totalPrice: totalPrice,
        totalProductCount: totalProductCount,
    })

    const onSubmit = () => {
        console.log(JSON.stringify(data,null, 2))
    }

    return (
        <div className="content">
            <div className="container container--cart">
                <div>
                    <h2 className="order-header">Ваш заказ:</h2>
                    <ul className='order-list'>
                        {
                            basket.map(item => {
                                return (
                                    <li key={item.id}>
                                        <h3>Пицца: - {item.title}</h3>
                                        <p>
                                                <span className='order-description'>
                                                    Размер: {' '}
                                                </span>
                                            <span className='order-value'>
                                                    {item.size} см.
                                                </span>
                                        </p>
                                        <p>
                                                <span className='order-description'>
                                                    Тесто: {' '}
                                                </span>
                                            <span className='order-value'>
                                                    {item.dough}
                                                </span>
                                        </p>
                                        <p>
                                                <span className='order-description'>
                                                    Количество: {' '}
                                                </span>
                                            <span className='order-value'>
                                                    {item.count} шт.
                                                </span>
                                        </p>
                                        <p>
                                                <span className='order-description'>
                                                    Цена за шт: {' '}
                                                </span>
                                            <span className='order-value'>
                                                    {item.price} руб.
                                                </span>
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="order_summary">
                        <p>Количество пицц в заказе: {' '} {totalProductCount} шт.</p>
                        <p>Общая стоимость: {' '} {totalPrice} руб.</p>
                    </div>
                    <div className='order-buttons'>
                        <NavLink to='/basket' className="button button--black">
                            <span>Вернуться назад</span>
                        </NavLink>
                        <div className="button pay-btn" onClick={onSubmit}>
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}