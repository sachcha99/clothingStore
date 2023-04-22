import styled from "styled-components";
import { mobile } from "../responsive";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import BadgeIcon from '@mui/icons-material/Badge';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import API from './../api'
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

const SignUpSpan = styled.span`
  margin-left: 5px;
  color: #7d9eff;
`;

const SignUpDiv = styled.div`
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
  margin: 10px 10px 0px 10px;
  padding: 6px 10px 6px 10px;  
  
  border: 1.5px solid #fff;
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
  width: 40px;
`;

const OrImg = styled.img`
  width: 500px;
  margin: 15px 0;
`;


const SocialImg = styled.img`
  width: 200px;
  margin: 15px 0;
`;

const FlexBox = styled.div`
  display: flex;
  width: '40%';
`;

const Register = () => {
  const [userDetails, setUserDetails] = useState({ fullName: "", email: "", username: "", userType: "", password: "" })
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

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userDetails.fullName !== "" && userDetails.email !== "" && userDetails.password !== "" && userDetails.userType !== "" && userDetails.username !== "") {

      if (!isValidEmail(userDetails.email)) {
        setSnackbarType("error")
        setSnackbarMsg("Please enter a valid email")
        handleOpenSnackbar()
      } else {
        console.log("userDetails::", userDetails)
        try {
          const result = await API.post('user/create', userDetails)
          console.log("result",result)
          setSnackbarType("success")
          setSnackbarMsg("User Created Successfully")
          handleOpenSnackbar()
        } catch (error) {
          setSnackbarType("error")
          setSnackbarMsg(error.response.data.message)
          handleOpenSnackbar()
        }
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

        <Title>CREATE AN ACCOUNT</Title>

        <TextField
          label="Full Name"
          id="fullName"
          autoComplete='off'
          value={userDetails.fullName}
          onChange={(e) => { setUserDetails({ ...userDetails, fullName: e.target.value }) }}
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
            startAdornment: <BadgeIcon style={{ color: 'white' }} />,
          }}
        />
        <TextField
          label="E-mail"
          onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
          value={userDetails.email}
          type='email'
          id="email"
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
            startAdornment: <MailOutlineIcon style={{ color: 'white' }} />,
          }}
        />
        <TextField
          label="Username"
          onChange={(e) => { setUserDetails({ ...userDetails, username: e.target.value }) }}
          id="username"
          value={userDetails.username}
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
          label="Password"
          onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
          id="password"
          value={userDetails.password}
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

        <RadioButtonContainer>
          <FlexBox style={{ alignItems: 'center' }}>
            <label style={{ color: '#fff' }}>  User Type</label>
          </FlexBox>

          <FormControl style={{ marginLeft: 'auto', marginRight: '80px' }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => { setUserDetails({ ...userDetails, userType: e.target.value }) }}

            >
              <FormControlLabel value="seller" style={{ color: '#fff' }} control={<Radio value="seller" style={{ color: '#fff' }} />} label="Seller" />
              <FormControlLabel value="buyer" style={{ color: '#fff' }} control={<Radio value="buyer" style={{ color: '#fff' }} />} label="Buyer" />
            </RadioGroup>
          </FormControl>
        

        </RadioButtonContainer>

        <ButtonContainer >
          <Button onClick={(e) => handleSubmit(e)}>SIGN UP</Button>
        </ButtonContainer>
        <OrImg src="https://i.ibb.co/cvHVtyC/Or.png" />
        <SocialImg src="https://i.ibb.co/dQ2HfbG/Social-Icons.png" />

        <SignUpDiv>
          Already have an account
          <Link style={{ textDecoration: 'none' }} to="/login"> <SignUpSpan> Sign In</SignUpSpan></Link>
        </SignUpDiv>
      </Wrapper>
    </Container>
  );
};

export default Register;
