

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography, Container, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        pin: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = {};
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.pin.trim()) {
            errors.pin = 'PIN is required';
        }

        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8080/login', formData);
                const responseData = response.data;

                sessionStorage.setItem("userId", responseData.userId);
                sessionStorage.setItem("userName", responseData.userName);
                sessionStorage.setItem("balance", responseData.balance);
                sessionStorage.setItem("accountNumber", responseData.accountNumber);

                setSubmitted(true);
                setSuccessMessage("Login Successful");
                setTimeout(() => {
                    navigate("/Account");
                }, 2000);
            } catch (error) {
                setErrorMessage(error.response.data);
            }
        }
    };

    return (
        <Grid container style={{ minHeight: '100vh' }}>
            {/* <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
    <img src={`${process.env.PUBLIC_URL}/bank4.jpg`} alt="Left" style={{ width: '100%', height: 'auto' }} />
</Grid> */}
<Box
                sx={{
                    flex: 1,
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bank.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    
                }}
            />

            <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container component="main" maxWidth="xs">
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                    </div>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                    
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="PIN"
                                    name="pin"
                                    type="password"
                                    value={formData.pin}
                                    onChange={handleChange}
                                    error={Boolean(errors.pin)}
                                    helperText={errors.pin}
                                    
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
                            Login
                        </Button>
                    </form>

                    {submitted && (
                        <Box mt={2} textAlign="center" bgcolor="#adcae6" p={2} borderRadius={5}>
                            <Typography color="success">
                                {successMessage}
                            </Typography>
                        </Box>
                    )}

                    {errorMessage && (
                        <Box mt={2} textAlign="center" bgcolor="#ffcccc" p={2} borderRadius={5}>
                            <Typography color="error">
                                {errorMessage}
                            </Typography>
                        </Box>
                    )}
                </Container>
            </Grid>
        </Grid>
    );
};

export default Login;

