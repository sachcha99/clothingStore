import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Category from './Category';
import API from '../../api'
import axios from "axios";

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

const MenCategoryList = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://i.ibb.co/6sCfkyQ/5-2-model-png.png", color: ['red', 'black'], size: ['Large', 'Medium'] },
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://i.ibb.co/f8Q55dg/8-2-model-png-picture.png", color: ['red', 'black'], size: ['Large', 'Medium'] },
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://i.ibb.co/2MGKzkY/9-2-model-png-hd.png", color: ['red', 'black'], size: ['Large', 'Medium'] },
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://i.ibb.co/VgLfDpp/4-2-model-free-png-image.png", color: ['red', 'black'], size: ['Large', 'Medium'] },
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://i.ibb.co/1QZ4YgH/3-2-model-picture.png", color: ['red', 'black'], size: ['Large', 'Medium'] }]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await axios.get(
  //         cat
  //           ? `http://localhost:5000/api/products?category=${cat}`
  //           : "http://localhost:5000/api/products"
  //       );
  //       setProducts(res.data);
  //     } catch (err) { }
  //   };
  //   getProducts();
  // }, [cat]);

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
      <Title>POPULAR MEN CLOTHING</Title>
      <Container>
        {cat
          ? filteredProducts.map((item) => <Category item={item} key={item.id} />)
          : products
            .slice(0, 8)
            .map((item) => <Category item={item} key={item.id} />)}
      </Container>
    </>
  );
};

export default MenCategoryList;
