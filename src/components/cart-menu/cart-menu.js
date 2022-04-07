import React from 'react'
import {CalcTotalPrice} from '../util'
import { Button } from '../button/button'
import './cart-menu.css'
import { CartItem } from '../cart-item/cart-item'
export const CartMenu = ({items , onClick}) => {
  return (
    <div className='cart-menu'>
        <div className='cart-menu__games-list'>
            {
                items.length > 0 ?  items.map(game => <CartItem title={game.title}key={game.title} price={game.price} id={game.id} />) : 'Cart Empty'
            }
        </div>
        {
            items.length > 0 ?
            <div className='cart-menu__arrange'>
                <div className='cart-menu__total-Price'>
                    <span>Total:</span>
                    <span className='total' >{Math.round(CalcTotalPrice(items))} $</span>
                    <Button  type="primary" size='m' onClick={onClick}>
                        Order Now
                    </Button>
                </div>
            </div>
            : null
        }
    </div>
  )
}
