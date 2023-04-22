import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 350px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const StatusButton = styled.button`
  padding: 15px;
  border: 2px solid white;
  background-color: #e9e9e9;
  cursor: pointer;
  font-weight: 700;
  color: black;
  border-radius: 8px;
  transition: 0.8s;


  &:hover {
    opacity: 1;
    background-color: #aaaaaa;
  }
`;
const OuterContainer = styled.div`
  
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  margin-left:15px;
  border-radius: 50%;
  display: inline-block;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Product = ({ item }) => {
  return (
    <OuterContainer>
      <Container>
        <Circle />
        <Image src={item.image} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}>
              {/* <Link to={`/product/`}> */}
              <SearchOutlined />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
      <ButtonContainer>
        <StatusButton>{item.status === "approved" ? "Approved" : item.status === "rejected" ? "Rejected" : "Pending"} <Dot style={item.status === "approved" ? { backgroundColor: 'green' } : item.status === "rejected" ? { backgroundColor: 'red' } : { backgroundColor: 'orange' }} /></StatusButton>
      </ButtonContainer>
    </OuterContainer>

  );
};

export default Product;
