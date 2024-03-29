import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import styled from "styled-components";
import WomenCategoryList from '../components/categoryList/WomenCategoryList'
import MenCategoryList from '../components/categoryList/MenCategoryList'
import ChildrenCategoryList from '../components/categoryList/ChildrenCategoryList'

const Container = styled.div`
  width: 100vw;
  background: 
    url("https://i.ibb.co/zb91222/Frame-5.png")
      center;
  background-size: cover;
  z-index: -1;
`;

const CategoriesList = () => {
  return (
    <>
      <Container>
        <Navbar />
        <WomenCategoryList/>   
        <MenCategoryList/>   
        <ChildrenCategoryList/>   
        <Footer />
      </Container>

    </>
  )
}

export default CategoriesList