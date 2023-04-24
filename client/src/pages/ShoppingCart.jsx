import React from 'react'
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`
width: 100vw;
background: 
  url("https://i.ibb.co/zb91222/Frame-5.png")
    center;
background-size: cover;
z-index: -1;`;

const CartHeader = styled.div`
  font-weight: 600;
  text-align: center;
  font-size: 30px;
  color: #555;
`;

const CartContainer = styled.div`
  margin-top: 32px;
  margin-right: 64px;
  margin-left: 8px;
  width: 90%
  text-align: center
`;

const CartWrapper = styled.div`
  border: 1px solid black;
  padding: 16px;
  margin-bottom: 16px;`;

const CartItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  text-transform: uppercase;
  color: #555;
  padding: 8px 0;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: #555;
  padding: 8px 16px;
`;

const Name = styled.div`
  flex: 2;
`;

const Quantity = styled.div`
  flex: 1;
`;

const Subtotal = styled.div`
  flex: 1;
  text-align: center;

`;

const Remove = styled.div`
  flex: 1;
  text-align: center;
`;

const ShoppingCart = () => {

    const cartItems = [
        {
            id: 1,
            quantity: 3,
            name: 'Product 1',
            description: 'This is a description of product 1.',
            price: 10.00,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Product 2',
            quantity: 3,
            description: 'This is a description of product 2.',
            price: 20.00,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Product 3',
            quantity: 3,
            description: 'This is a description of product 3.',
            price: 30.00,
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <Container>
            <Navbar />
            <CartWrapper>
                <CartHeader>My Cart</CartHeader>
                {/* {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
            ))} */}
                <CartContainer>
                    <TableHeader>
                        <Name>Product Name</Name>
                        <Quantity>Quantity</Quantity>
                        <Remove>Remove</Remove>
                        <Subtotal>Subtotal</Subtotal>
                    </TableHeader>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </CartContainer>

                <p>Total Price: Rs 500</p>
            </CartWrapper>
            <Footer />
        </Container>
    )
}

export default ShoppingCart