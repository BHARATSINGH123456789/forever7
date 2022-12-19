import React from 'react'
import { NavLink } from 'react-router-dom';
import "./SingleProduct.css"

const SingleProduct = ({ prod}) => {

    return (
        <div className="single-card" >
            <NavLink to={`/${prod.link}`}>
                <img src={prod.otherImages[0]} className="single-card-img" />
            </NavLink>
            <h5>{prod.name}</h5>
            <span className='single-prod-descrip'>{prod.description}</span>
            <span className='single-price'>
                <p>Rs.{prod.finalPrice}</p>
                <p className='strickPrice'>{prod.strickPrice}</p>
                <p className='discount'>{prod.discount} % OFF</p>
            </span>

        </div>
    )
}

export default SingleProduct