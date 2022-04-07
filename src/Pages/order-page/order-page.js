import React from 'react';
import { useSelector} from 'react-redux';
import { OrderItem } from '../../components/order-item/order-item';
import { CalcTotalPrice, enumerate } from '../../components/util.js';
import './order-page.css';

export const OrderPage = () => {
    const items = useSelector((state) => state.cart.itemsInCart);

    if(items.length < 1) {
        return <h1>Cart is Empty</h1>
    }

    return (
        <div className="order-page">
            <div className="order-page__left">
                { items.map(game => <OrderItem game={game}/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span className='total_price'>total Price : {CalcTotalPrice(items)} $</span>
                </div>
            </div>
        </div>
    )
}
