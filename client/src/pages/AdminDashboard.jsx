import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/admin/Products'

const AdminDashboard = () => {
  return (
    <div>
        <Navbar/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default AdminDashboard