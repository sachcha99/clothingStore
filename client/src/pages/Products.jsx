import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import styled from "styled-components";
import ProductList from '../components/productList/ProductList'


const Container = styled.div`
  width: 100vw;
  background: 
    url("https://i.ibb.co/zb91222/Frame-5.png")
      center;
  background-size: cover;
  z-index: -1;
`;

const Products = () => {
  return (
    <>
      <Container>
        <Navbar />
        <ProductList/>   
        <Footer />
      </Container>

    </>
  )
}

export default Products