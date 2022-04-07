import React from 'react'
import { Link } from 'react-router-dom'
import { CartBlock } from '../cart-block/cart-block'

import './header.css'
function Header() {
  return (
        <header>
            <Link className='header__store-title' to="/">Game-Store</Link>
            <CartBlock/>
        </header>
  )
}
export default Header