import React from 'react'
import "./Header.css";
import logo from "./Myntra logo.png"
import cartLogo from "./Cart logo.png"
import { NavLink } from 'react-router-dom';
import { CartState } from '../Context/Context';

const Header = () => {

    const {
        state: { cart },
        dispatch,
        productDispatch,
      } = CartState();

  return (
    <div className='header-container'>
        <div className='left'>
            <NavLink to="/">
            <img src={logo} className="myntra-logo"/>
            </NavLink>  
            <div className='header-categories'>
                <p>Men</p>
                <p>Women</p>
                <p>Kid</p>
            </div>
        </div>

        <div className='searchBar'>
            <input type="text" className='search' placeholder='Search your products here'  onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}/>
        </div>

        <div className='right'>
            <NavLink to="/cart">
            <img src={cartLogo} className="cart-logo"/>
            </NavLink>
        </div>
    </div>
  )
}

export default Header
