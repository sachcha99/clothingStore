import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
// import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PaymentsForm from "../components/PaymentsForm";
import CheckoutForm from "../components/CheckoutForm";
// import { publicRequest } from "../requestMethods";
// import { addProduct } from "../redux/cartRedux";
// import { useDispatch } from "react-redux";

const Container = styled.div`
width: 100vw;
background: 
  url("https://i.ibb.co/zb91222/Frame-5.png")
    center;
background-size: cover;
z-index: -1;`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  // background-color: white;
  ${mobile({ padding: "10px", flexDirection: "column" })}
  
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 700px !important;
  background-color:white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 0 2% 2% 0;
  
`;

const Image = styled.img`
  // margin-right: 12px;
  border-radius: 0 2% 2% 0;
  height: 700px !important;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
  background-color:#a7beff;
`;

const InfoContainer = styled.div`
  border-radius: 2% 0 0 2%;
  background-color: white;
  height: 700px;
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 700;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #2148C0;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border-radius: 20px;
  transition: 0.8s;


  &:hover {
    opacity: 1;
    background-color: #002796;
  }
`;

const Checkout = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState(
    {title:"Plaid Sleeve Kangaroo Pocket Drawstring Frock",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, augue hendrerit finibus mattis, turpis felis vestibulum risus, nec commodo lacus erat at ligula. Morbi dignissim volutpat mi, in consequat sem lacinia eu. Nunc facilisis velit id bibendum dignissim. Phasellus sem lacus, scelerisque ut vestibulum eu, facilisis et ex. Praesent justo nunc, fringilla ut faucibus non, feugiat efficitur eros. Phasellus auctor, augue tristique vestibulum facilisis, turpis dolor sodales augue, vitae ultrices odio dui non mauris. Vestibulum ac metus lectus.",
    price:'250',
    img:"https://i.ibb.co/f8Q55dg/8-2-model-png-picture.png",
    color:['red','black','blue', 'green', 'yellow'],
    size:['XS','S','M','L', 'XL']});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await publicRequest.get("/products/find/" + id);
  //       setProduct(res.data);
  //     } catch {}
  //   };
  //   getProduct();
  // }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    // dispatch(
    //   addProduct({ ...product, quantity, color, size })
    // );
  };
  return (
    <Container>
      <Navbar />
      {/* <Announcement /> */}
      <Wrapper>
        <InfoContainer>
          <Title>CHECKOUT</Title>
          <CheckoutForm/>
        </InfoContainer>
        <ImgContainer>
          <Image src='https://i.ibb.co/HqYV2Fp/Group-40.png'/>
        </ImgContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Checkout;
