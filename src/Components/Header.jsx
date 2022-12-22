import React from 'react'
import "./Header.css";
import logo from "./img/forever7.png"
import cartLogo from "./img/Cart logo.png"
import { NavLink } from 'react-router-dom';
import { CartState } from '../Context/Context';

const Header = () => {

  const {

    productDispatch,
  } = CartState();

  return (
    <div className='header-container'>
      <div className='left'>
        <NavLink to="/">
          <img src={logo} className="forever7-logo" alt='' />
        </NavLink>

      </div>

      <div className='searchBar'>
        <input type="text" className='search' placeholder='Search your products here....' onChange={(e) => {
          productDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          });
        }} />
      </div>

      <div className='right'>
        <NavLink to="/cart">
          <img src={cartLogo} className="cart-logo" alt='' />
        </NavLink>
      </div>
    </div>
  )
}

export default Header
