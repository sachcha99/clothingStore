import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/seller/Products'

const SellerDashboard = () => {
  return (
    <div>
        <Navbar/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default SellerDashboard