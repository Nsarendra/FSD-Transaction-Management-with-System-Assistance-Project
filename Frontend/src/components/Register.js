
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography, Container, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        pin: '',
        confirmPin: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = {};
        if (!formData.userName.trim()) {
            errors.userName = 'Username is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.pin.trim()) {
            errors.pin = 'PIN is required';
        }
        if (formData.pin !== formData.confirmPin) {
            errors.confirmPin = 'PINs do not match';
        }
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8080/register', formData);
                console.log('API Response:', response.data);
                setSubmitted(true);
                setSuccessMessage('Registration Successful');
                const delayedNavigation = () => {
                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                };
                delayedNavigation();
            } catch (error) {
                console.error('API Error:', error);
            }
        }
    };

    return (
        <Container component="main" maxWidth="lg" style={{ display: 'flex', height: '100vh', padding: 0 }}>
            {/* Left half for image */}
            <Box
                sx={{
                    flex: 1,
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bank.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    
                }}
            />
            {/* Right half for registration form */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 3,
                }}
            >
                <Box sx={{ width: '100%', maxWidth: 400 }}>
                <Typography component="h1" variant="h4" align="center" gutterBottom>
                        Welcome to JQ Bank
                    </Typography>
                    <Typography component="h1" variant="h5" align="center" gutterBottom>
                        Please Register Here
                    </Typography>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="UserName"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    error={Boolean(errors.username)}
                                    helperText={errors.username}
                                   

                                />
                            </Grid>
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
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Confirm PIN"
                                    name="confirmPin"
                                    type="password"
                                    value={formData.confirmPin}
                                    onChange={handleChange}
                                    error={Boolean(errors.confirmPin)}
                                    helperText={errors.confirmPin}
                                    

                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '16px' }}>
                            Register
                        </Button>
                        <Typography variant="body1" align="center" style={{ marginTop: '16px' }}>
                            Already have an account? <Link to="/login">Click here to login</Link>
                        </Typography>
                    </form>
                    {submitted && (
                        <div style={{ marginTop: '24px', textAlign: 'center', backgroundColor: '#adcae6', padding: '10px', borderRadius: '5px' }}>
                            <Typography color="success">
                                {successMessage}
                            </Typography>
                        </div>
                    )}
                </Box>
            </Box>
        </Container>
    );
};

export default RegistrationForm;


