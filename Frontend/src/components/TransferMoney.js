

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography, Container, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const TransferMoney = ({ userId }) => {
    const [formData, setFormData] = useState({
        accountNumber: '',
        amount: '',
        pin: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const Id = sessionStorage.getItem('userId');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = {};
        if (!formData.accountNumber.trim()) {
            errors.accountNumber = 'Account Number is required';
        }
        if (!formData.amount.trim()) {
            errors.amount = 'Amount is required';
        }
        if (!formData.pin.trim()) {
            errors.pin = 'PIN is required';
        }
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8080/sendMoney', {
                    ...formData,
                    userId: Id // Include userId in the request
                });
                console.log('API Response:', response.data);
                setSubmitted(true);
                setSuccessMessage(response.data);
                const delayedNavigation = () => {
                    setTimeout(() => {
                        navigate("/account");
                    }, 3000);
                };
                delayedNavigation();
            } catch (error) {
                console.error('API Error:', error);
                setErrorMessage(error.response.data);

            }
        }
    };

    return (

        <div>

        <Navbar/> 

        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to right, #ece9e6, #ffffff)' }}>
            <Paper elevation={6} sx={{ padding: '40px', borderRadius: '10px', textAlign: 'center', maxWidth: '600px', width: '100%' }}>
                <Typography component="h1" variant="h5" style={{ marginBottom: '20px', textAlign: 'center' }}>
                    Transaction
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Account Number"
                                name="accountNumber"
                                value={formData.accountNumber}
                                onChange={handleChange}
                                error={errors.accountNumber}
                                helperText={errors.accountNumber}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Amount"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                error={errors.amount}
                                helperText={errors.amount}
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
                                error={errors.pin}
                                helperText={errors.pin}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Submit Transaction
                    </Button>
                </form>
                {submitted && (
                    <div style={{ marginTop: '20px', textAlign: 'center', backgroundColor: '#d3ffd3', padding: '10px', borderRadius: '5px' }}>
                        <Typography color="success">
                            {successMessage}
                        </Typography>
                    </div>
                )}

                {errorMessage && (
                            <Box mt={2} textAlign="center" bgcolor="#ffcccc" p={2} borderRadius={5}>
                                <Typography color="error">
                                    {errorMessage}
                                </Typography>
                            </Box>
                        )
                    }
            </Paper>
        </Box>

        </div>

            

            
    );
};

export default TransferMoney;

