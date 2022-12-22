import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom';
import { CartState } from '../Context/Context';
import "./Cart.css"
import trash from "./img/trash-btn.png"

const Cart = () => {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.finalPrice), 0)
        );
    }, [cart]);

    return (
        <div className='cart-container'>
            {
                cart.length > 0 ?
                    <div className='product-container'>
                        <div className='products'>
                            {
                                cart.map((prod) => {
                                    return <div className='maped-product'>
                                        <img src={prod.otherImages[0]} className="cart-img" alt='' />
                                        <strong>{prod.name}</strong>
                                        <strong>Rs {prod.finalPrice}</strong>
                                        <img src={trash} className="trash-btn" onClick={() =>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: prod,
                                            })
                                        } alt="" />
                                    </div>
                                })
                            }
                        </div>
                        <div className='buy-container'>
                            <p className='total-prod'>Total Products {cart.length}</p>
                            <div className='hr'></div>
                            <p className='total-amount'>Total Amount</p>
                            <p className='sumTotal'>Rs {total}</p>
                            <NavLink to="/order">
                                <button className='buy-btn'>Buy Now</button>
                            </NavLink>

                        </div>
                    </div>
                    :
                    <h1>Cart is Empty</h1>
            }
        </div>
    )
}

export default Cart