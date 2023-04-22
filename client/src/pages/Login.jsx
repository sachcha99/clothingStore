import styled from "styled-components";
import { mobile } from "../responsive";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { ShoppingCartOutlined } from '@mui/icons-material';
import BadgeIcon from '@mui/icons-material/Badge';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import API from './../api'
import { useSelector, useDispatch } from 'react-redux';
import { login, userInfo } from '../redux/user';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://i.ibb.co/JF8HLH0/Vector.png")
      center;
  background-color: #2148C0;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 600px;
  padding: 20px;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,0.6531862745098039) 0%, rgba(38,78,202,1) 0%);
  ${mobile({ width: "75%" })}
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0px;
  width: 500px
`;

const LogInSpan = styled.span`
  margin-left: 5px;
  color: #7d9eff;
`;

const LogInDiv = styled.div`
  width: 500px
  font-size: 12px;
  display: flex;
  justify-content: center
`;

const Button = styled.button`
  width: 500px;
  border: none;
  padding: 15px 20px;
  background-color: white;
  color:#2148C0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:10px;
`;

const RadioButtonContainer = styled.div`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0px 0px;
  padding: 10px;  
  border:1px solid #767676;
  border-radius: 3px; 
  display: flex;
`;

const RadioInput = styled.div`
  display: flex;
  margin: 0 10px
`;

const LogoImg = styled.img`
  width: 100px;
  position: absolute;
  top: 5px;
  left: 5px;
  // background-color: white;
`;

const CartImg = styled.img`
  width: 120px;
`;

const OrImg = styled.img`
  width: 500px;
  margin: 15px 0;
`;


const SocialImg = styled.img`
  width: 200px;
  margin: 15px 0;
`;


const Login = () => {
  const [userDetails, setUserDetails] = useState({ username: "", password: "" })
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState("");
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userDetails.password !== "" && userDetails.username !== "") {

      console.log("userDetails::", userDetails)
      try {
        const result = await API.post('user/validate', userDetails)
        console.log("result", result)
        setSnackbarType("success")
        setSnackbarMsg("Logged In Successfully")
        handleOpenSnackbar()
        let decodedToken = jwt_decode(result.data.token)
        localStorage.setItem('token', result.data.token)
        localStorage.setItem('userInfo', JSON.stringify(result.data.userDetails))
        dispatch(login({ 'fullName': decodedToken.fullName, 'username': decodedToken.username }))
        dispatch(userInfo(result.data.userDetails))
        if (result.data.userDetails.userType === "buyer") {
          navigate('/')
        }
        if (result.data.userDetails.userType === "seller") {
          navigate('/sellerDashboard')
        }
        if (result.data.userDetails.userType === "admin") {
          navigate('/adminDashboard')
        }

      } catch (error) {
        console.log("error", error)
        setSnackbarType("error")
        setSnackbarMsg(error.response.data)
        handleOpenSnackbar()
      }

    }
    else {
      setSnackbarType("error")
      setSnackbarMsg("Please fill all the fields")
      handleOpenSnackbar()
    }

  };

  return (
    <Container>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarType} sx={{ width: '100%' }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
      <Link to="/">
        <LogoImg src='https://i.ibb.co/H2tcszD/logo.png' />
      </Link>
      <Wrapper>
        <CartImg src="https://i.ibb.co/Rzjs3Zw/Group.png" />

        <Title>Log In</Title>
        <TextField
          label="Username"
          id="username"
          value={userDetails.username}
          onChange={(e) => { setUserDetails({ ...userDetails, username: e.target.value }) }}
          autoComplete='off'
          sx={{
            "& .MuiInputBase-root": {
              width: 500
            },
            input: { color: 'white', marginLeft: '8px' },
            m: 1, fieldset: { borderColor: "white" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "white"
              }
            }
          }}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          InputProps={{
            sx: {
              width: '100%'
            },
            startAdornment: <AccountCircleIcon style={{ color: 'white' }} />,
          }}
        />
        <TextField
          type='password'
          value={userDetails.password}
          onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
          label="Password"
          id="password"
          sx={{
            "& .MuiInputBase-root": {
              width: 500
            },
            input: { color: 'white', marginLeft: '8px' },
            m: 1, fieldset: { borderColor: "white" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "white"
              }
            }
          }}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          InputProps={{
            sx: {
              width: '100%'
            },
            startAdornment: <KeyIcon style={{ color: 'white' }} />,
          }}
        />
        <ButtonContainer>
          <Button onClick={(e) => { handleSubmit(e) }}>LOG IN</Button>
        </ButtonContainer>
        <OrImg src="https://i.ibb.co/cvHVtyC/Or.png" />
        <SocialImg src="https://i.ibb.co/dQ2HfbG/Social-Icons.png" />
        <LogInDiv>
          Don’t have an account?
          <Link style={{ textDecoration: 'none' }} to="/register"> <LogInSpan> Sign Up</LogInSpan></Link>
        </LogInDiv>
      </Wrapper>
    </Container>
  );
};

export default Login;
