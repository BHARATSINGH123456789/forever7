import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'
import Header from './Components/Header'
import Home from "./Components/Home"
import Cart from './Components/Cart'
import OrderConfirmed from './Components/OrderConfirmed'


const App = () => {
  return (
 <>
    
 <BrowserRouter>
 <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<OrderConfirmed/>}/>
      <Route path="/:id" element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
 </>
    
  )
}

export default App
