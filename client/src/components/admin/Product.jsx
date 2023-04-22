import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import API from './../../api'
import React, { useState } from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


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

const ApproveButton = styled.button`
  padding: 15px;
  border: 2px solid #00ff00;
  background-color: #00a429;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border-radius: 20px;
  transition: 0.8s;
  width: 90px;


  &:hover {
    opacity: 1;
    background-color: #005916;
  }
`;

const RejectButton = styled.button`
  padding: 15px;
  border: 2px solid #ff4f4f;
  background-color: #e10000;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border-radius: 20px;
  transition: 0.8s;
  width: 90px;


  &:hover {
    opacity: 1;
    background-color: #7b0000;
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

const Product = ({ item , toggle, setToggle}) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState("");
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };
  const handleApprove = async () => {
    try {
      const result = await API.put(`product/update/${item._id}`, { status: "approved" })
      console.log("result", result)
      setSnackbarType("success")
      setSnackbarMsg(`${item.title} Approved`)
      handleOpenSnackbar()
      setToggle(!toggle)

    } catch (error) {
      console.log("error:::",error)
      setSnackbarType("error")
      setSnackbarMsg(error.response.data.message)
      handleOpenSnackbar()
    }
  }

  const handleReject = async () => {
    try {
      const result = await API.put(`product/update/${item._id}`, { status: "rejected" })
      console.log("result", result)
      setSnackbarType("success")
      setSnackbarMsg(`${item.title} Rejected`)
      handleOpenSnackbar()
      setToggle(!toggle)


    } catch (error) {
      setSnackbarType("error")
      setSnackbarMsg(error.response.data.message)
      handleOpenSnackbar()
    }
  }

  return (
    <OuterContainer>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarType} sx={{ width: '100%' }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
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
        {item.status === "pending" ?
          <>
            <ApproveButton onClick={() => handleApprove()}>Approve</ApproveButton>
            <RejectButton onClick={() => handleReject()}>Reject</RejectButton></>
          :
          <StatusButton>{item.status === "approved" ? "Approved" : "Rejected"} <Dot style={item.status === "approved" ? { backgroundColor: 'green' } : { backgroundColor: 'red' }} /></StatusButton>}
      </ButtonContainer>
    </OuterContainer>
  );
};

export default Product;
