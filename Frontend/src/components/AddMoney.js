

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography, Container, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function AddMoney() {
    const [amount, setAmount] = useState('');
    const [pin, setPin] = useState('');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handlePinChange = (event) => {
        setPin(event.target.value);
    };

    const userId = sessionStorage.getItem('userId');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const errors = {};

        if (!amount.trim()) {
            errors.amount = 'Amount is required';
        }

        if (!pin.trim()) {
            errors.pin = 'PIN is required';
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8080/addMoney', {
                    userId: userId,
                    amount: amount,
                    pin: pin
                });

                setSubmitted(true);
                setSuccessMessage('Money transferred successfully');

                const delayedNavigation = () => {
                    setTimeout(() => {
                        navigate('/account');
                    }, 2000);
                };

                delayedNavigation();
            } catch (error) {
                console.error('API Error:', error);
            }
        }
    };

    return (

         <div>

        <Navbar/>         

        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to right, #ece9e6, #ffffff)' }}>
            <Paper elevation={6} sx={{ padding: '40px', borderRadius: '10px', textAlign: 'center', maxWidth: '600px', width: '100%' }}>
            <Typography component="h1" variant="h5" style={{ marginBottom: '20px', textAlign: 'center' }}>
                Add Money To Your Account
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Amount"
                            name="amount"
                            value={amount}
                            onChange={handleAmountChange}
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
                            value={pin}
                            onChange={handlePinChange}
                            error={errors.pin}
                            helperText={errors.pin}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Add Money
                </Button>
            </form>
            {submitted && (
                <div style={{ marginTop: '20px', textAlign: 'center', backgroundColor: '#adcae6', padding: '10px', borderRadius: '5px' }}>
                    <Typography color="success">{successMessage}</Typography>
                </div>
            )}
        </Paper>
        </Box>
        </div>
    );
}

export default AddMoney;
