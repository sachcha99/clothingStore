import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import React, { useState, useEffect } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import API from './../api'
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Get production API keys from Upload.io
const uploader = Uploader({
    apiKey: "free"
});

// Customize the dropzone UI (see "customization"):
const options = { multi: false }

const Text = styled.div`
margin:25px 0 45px 0`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #043ccc;
  background-color: #2148C0;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border-radius: 10px;
  transition: 0.8s;
  height:50px;
  width: 100%;
  margin-left:40px;


  &:hover {
    opacity: 1;
    background-color: #002796;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px
`;

const AddNewProductForm = () => {
    const [productDetails, setProductDetails] = useState({ title: "", description: "", category: "", price: "", image: "", status: "pending" })
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [snackbarType, setSnackbarType] = useState("");
    const [snackbarMsg, setSnackbarMsg] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        console.log("productDetails:::", productDetails)

    }, [productDetails]);

    useEffect(() => {
        if (imageUrl) {
            console.log("imageUrl:::", imageUrl)
            setProductDetails({ ...productDetails, image: imageUrl })
        }

    }, [imageUrl]);

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
        console.log("productDetails::", productDetails)

        if (productDetails.title !== "" && productDetails.description !== "" && productDetails.category !== "" && productDetails.price !== "" && productDetails.image !== "") {

            try {
                const result = await API.post('product/create', productDetails)
                console.log("result", result)
                setSnackbarType("success")
                setSnackbarMsg("New Product Added Successfully")
                handleOpenSnackbar()
                navigate("/sellerDashboard");

            } catch (error) {
                setSnackbarType("error")
                setSnackbarMsg(error.response.data.message)
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
        <>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbarType} sx={{ width: '100%' }}>
                    {snackbarMsg}
                </Alert>
            </Snackbar>
            <Text>We’re here to help! Send us your query via the form below or send us an email at helpdesk@shiftclothing.com for any issue you’re facing    </Text>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="productTitle"
                        name="productTitle"
                        label="Product Title"
                        fullWidth
                        autoComplete="productTitle"
                        variant="outlined"
                        value={productDetails.title}
                        onChange={(e) => { setProductDetails({ ...productDetails, title: e.target.value }) }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id="description"
                        name="description"
                        label="Description"
                        fullWidth
                        autoComplete="description"
                        value={productDetails.description}
                        onChange={(e) => { setProductDetails({ ...productDetails, description: e.target.value }) }}
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Category"
                            value={productDetails.category}
                            onChange={(e) => { setProductDetails({ ...productDetails, category: e.target.value }) }}
                        // onChange={handleChange}
                        >
                            <MenuItem value={'Men'}>Men</MenuItem>
                            <MenuItem value={'Women'}>Women</MenuItem>
                            <MenuItem value={'Kids'}>Kids</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>



                <Grid item xs={12}>
                    <TextField
                        label="Price"
                        id="price"
                        fullWidth
                        sx={{
                            input: { marginLeft: '8px' },
                        }}
                        value={productDetails.price}
                        onChange={(e) => { setProductDetails({ ...productDetails, price: e.target.value }) }}
                        autoComplete='price'
                        InputProps={{
                            startAdornment: '$',
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <UploadDropzone uploader={uploader}       // Required.
                        options={options}         // Optional.
                        width="100%"             // Optional.
                        height="350px"            // Optional.
                        onUpdate={files => {      // Optional.
                            if (files.length === 0) {
                                console.log('No files selected.')
                            } else {
                                console.log('Files uploaded:');
                                console.log(files.map(f => f.fileUrl));
                                setImageUrl((files.map(f => f.fileUrl))[0])
                            }
                        }}

                    // onComplete={files => {setProductDetails({ ...productDetails, image: (files.map(f => f.fileUrl))[0] })}}


                    />
                </Grid>
            </Grid>
            <ButtonContainer onClick={(e) => handleSubmit(e)}>
                <Button>ADD NEW PRODUCT</Button>
            </ButtonContainer>
        </>

    )
}

export default AddNewProductForm