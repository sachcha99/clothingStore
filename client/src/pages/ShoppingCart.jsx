// import React, { useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 20px;
// `;

// const CartItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
// `;

// const CartItem = styled.div`
//   display: flex;
//   margin-bottom: 10px;
// `;

// const ItemImage = styled.img`
//   width: 150px;
//   height: 150px;
//   object-fit: contain;
// `;

// const ItemDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-left: 10px;
// `;

// const ItemName = styled.span`
//   font-size: 20px;
//   font-weight: bold;
// `;

// const ItemPrice = styled.span`
//   font-size: 16px;
// `;

// const Quantity = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: auto;
// `;

// const QuantityLabel = styled.span`
//   font-size: 16px;
//   margin-right: 10px;
// `;

// const QuantityInput = styled.input`
//   width: 40px;
//   padding: 5px;
//   font-size: 16px;
// `;

// const TotalPrice = styled.div`
//   font-size: 24px;
//   font-weight: bold;
//   margin-top: 20px;
//   text-align: right;
// `;

// const CheckoutButton = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   font-weight: bold;
//   background-color: #f50057;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top: 20px;
//   align-self: flex-end;

//   &:hover {
//     background-color: #d5004b;
//   }
// `;

// function ShoppingCart() {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Item 1",
//       price: 10.99,
//       quantity: 1,
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 2,
//       name: "Item 2",
//       price: 5.99,
//       quantity: 2,
//       image: "https://via.placeholder.com/150",
//     },
//   ]);

//   const totalPrice = cartItems.reduce(
//     (total, cartItem) => total + cartItem.price * cartItem.quantity,
//     0
//   );

//   function handleQuantityChange(item, event) {
//     const newQuantity = event.target.value;
//     setCartItems(
//       cartItems.map((cartItem) =>
//         cartItem.id === item.id ?
//           { ...cartItem, quantity: parseInt(newQuantity) } :
//           cartItem
//       )
//     );
//   }

//   function handleCheckout() {
//     console.log("Checkout button clicked");
//   }

//   return (
//     <Container>
//       <CartItems>
//         {cartItems.map((item) => (
//           <CartItem key={item.id}>
//             <ItemImage src={item.image} alt={item.name} />
//             <ItemDetails>
//               <ItemName>{item.name}</ItemName>
//               <ItemPrice>${item.price}</ItemPrice>
//             </ItemDetails>
//             <Quantity>
//               <QuantityLabel>Quantity:</QuantityLabel>
//               <QuantityInput
//                 type="number"
//                 value={item.quantity}
//                 onChange={(event) => handleQuantityChange
