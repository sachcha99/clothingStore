import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from '../../api'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-LEFT: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #043ccc;
  background-color: #2148C0;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border-radius: 10px;
  transition: 0.8s;
  height:50px;


  &:hover {
    opacity: 1;
    background-color: #002796;
  }
`;


const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px
`;

const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://i.ibb.co/6sCfkyQ/5-2-model-png.png", color: ['red', 'black'], size: ['Large', 'Medium'] },
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://i.ibb.co/f8Q55dg/8-2-model-png-picture.png", color: ['red', 'black'], size: ['Large', 'Medium'] },
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://i.ibb.co/2MGKzkY/9-2-model-png-hd.png", color: ['red', 'black'], size: ['Large', 'Medium'] },
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://i.ibb.co/VgLfDpp/4-2-model-free-png-image.png", color: ['red', 'black'], size: ['Large', 'Medium'] },
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://i.ibb.co/1QZ4YgH/3-2-model-picture.png", color: ['red', 'black'], size: ['Large', 'Medium'] }]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  let navigate = useNavigate();



  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await API.get('product/')
        console.log("result",result)
        setProducts(result.data);
      } catch (err) {
        console.log("err",err)
       }
    };
    getProducts();
  }, []);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      <Container>
        {cat
          ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
          : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
      </Container>
    </>
  );
};

export default Products;
