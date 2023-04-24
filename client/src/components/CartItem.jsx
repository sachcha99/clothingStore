import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const Product = styled.div`
    display: flex;
    align-items: center;
`;

const CartItemImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 16px;
  margin-bottom: 8px;
`;

const CartItemImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const CartItemName = styled.p`
  margin: 0;
`;

const CartItemPrice = styled.p`
  margin: 0;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
`;

const Quantity = styled.span`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  margin: 0 4px;
  display: flex;
  align-items: center;
`;
const QuantityButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: red;
`;

const CartItem = ({ item, updateCartItem, removeCartItem }) => {
    const handleQuantityIncrease = () => {
        updateCartItem({ ...item, quantity: item.quantity + 1 });
    };

    const handleQuantityDecrease = () => {
        if (item.quantity > 1) {
            updateCartItem({ ...item, quantity: item.quantity - 1 });
        }
    };

    return (
        <>
            <CartItemWrapper>
                <Product>
                    <CartItemImageWrapper>
                        <CartItemImage src={item.image} alt={item.name} />
                    </CartItemImageWrapper>
                    <CartItemName>{item.name}</CartItemName>
                </Product>
                <QuantityWrapper>
                    <QuantityBox>
                        <QuantityButton onClick={handleQuantityDecrease}>
                            <RemoveIcon sx={{ backgroundColor: '#f5f5f5', borderRadius: '4px' }} />
                        </QuantityButton>
                    </QuantityBox>
                    <QuantityBox>
                        <Quantity>{item.quantity}</Quantity>
                    </QuantityBox>
                    <QuantityBox>
                        <QuantityButton onClick={handleQuantityDecrease}>
                            <AddIcon sx={{ backgroundColor: '#f5f5f5', borderRadius: '4px' }} />
                        </QuantityButton>
                    </QuantityBox>
                </QuantityWrapper>
                <DeleteIcon sx={{ color: 'red' }} />
                <CartItemPrice>R.S. {item.price}</CartItemPrice>
            </CartItemWrapper>
        </>
    );
};

export default CartItem;