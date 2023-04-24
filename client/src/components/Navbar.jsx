
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  height: 85px !important;
  ${mobile({ height: "50px" })}
  width: 100vw;
  height: 100%;
  background: 
    url("https://i.ibb.co/JF8HLH0/Vector.png")
      center;
  background-color: #2148C0;

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,0.6531862745098039) 0%, rgba(0,0,0,0.65) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  margin-bottom: -30px;
  padding-right:45px;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "24px" })}
// `;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItm = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const LogoImg = styled.img`
  width: 100px;
`;

const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const quantity = 10;
  const token = localStorage.getItem("token") || null;
  const userInfoDetails = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();

  const logout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    window.location.reload();
    navigate("/");
  }

  return (
    <NavbarContainer>
      <Wrapper>
        <Left>
          {/* <Logo>Shift Clothing</Logo> */}
          <Link style={{ textDecoration: 'none' }} to="/">
            <LogoImg src='https://i.ibb.co/WgrvDHc/logo-white.png' />
          </Link>
        </Left>
        <Center>
          <Link style={{ textDecoration: 'none' }} to="/">
            <MenuItm>HOME</MenuItm>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/products">
            <MenuItm>PRODUCTS</MenuItm>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/categories">
            <MenuItm>CATEGORIES</MenuItm>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/contact">
            <MenuItm>CONTACT US</MenuItm>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/about">
            <MenuItm>ABOUT US</MenuItm>
          </Link>
        </Center>
        <Right>
          {!token &&
            <>
              <Link style={{ textDecoration: 'none' }} to="/register">
                <MenuItm>REGISTER</MenuItm>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/login">
                <MenuItm>SIGN IN</MenuItm>
              </Link>
            </>}
          {token &&
            <>
              {userInfoDetails && userInfoDetails.userType === "buyer" &&
                <Link to="/cart">
                  <MenuItm>
                    <Badge badgeContent={quantity} color="primary">
                      <ShoppingCartOutlined />
                    </Badge>
                  </MenuItm>
                </Link>}
              <Box sx={{ flexGrow: 0, ml: "35px" }}>
                <Tooltip title={userInfoDetails ? userInfoDetails.fullName : "User"}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={userInfoDetails ? userInfoDetails.fullName : "User"} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {userInfoDetails && userInfoDetails.userType === "seller" &&
                    <Link style={{ textDecoration: 'none' }} to="/sellerDashboard">
                      <MenuItem >
                        <Typography textAlign="center">Seller Dashboard</Typography>
                      </MenuItem>
                    </Link>}
                  {userInfoDetails && userInfoDetails.userType === "admin" &&
                    <Link style={{ textDecoration: 'none' }} to="/adminDashboard">
                      <MenuItem >
                        <Typography textAlign="center">Admin Dashboard</Typography>
                      </MenuItem>
                    </Link>}
                  <MenuItem onClick={(e) => logout(e)}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </>}
        </Right>
      </Wrapper>
    </NavbarContainer>
  )
}

export default Navbar