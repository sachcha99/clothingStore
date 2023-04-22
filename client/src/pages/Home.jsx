import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import styled from "styled-components";
import Products from '../components/Products'
import ResponsiveAppBar from '../components/Appbar'


const Container = styled.div`
  width: 100vw;
  // height: 100vh;
  // background: 
  //   url("https://i.ibb.co/vxBN7PR/Frame-5.png")
  //     center;
  background-color: #fff;
  background-size: cover;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Navbar />
        {/* <ResponsiveAppBar/> */}
        <Slider />
        <Categories />
        <Products/>
        <Newsletter />
        <Footer />
      </Container>

    </>
  )
}

export default Home