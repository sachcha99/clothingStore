import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";


const Text = styled.div`
margin:25px 0 45px 0`;

const ContactUsForm = () => {
    return (
        <>
            <Text>We’re here to help! Send us your query via the form below or send us an email at helpdesk@shiftclothing.com for any issue you’re facing    </Text>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        autoComplete="name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="email"
                        name="email"
                        label="E-mail"
                        fullWidth
                        type='email'
                        autoComplete="email"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="message"
                        name="message"
                        label="Message"
                        fullWidth
                        autoComplete="message"
                        variant="outlined"
                        multiline
                        rows={10}
                        maxRows={4}
                    />
                </Grid>
            </Grid>
        </>

    )
}

export default ContactUsForm