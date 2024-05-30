
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import Navbar from './Navbar';

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([]);

    const id=sessionStorage.getItem('userId');

    useEffect(() => {
        // Fetch transaction history data from API
        const fetchTransactions = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/history/${id}`); // Replace with your API endpoint
                setTransactions(response.data);
            } catch (error) {
                console.error('API Error:', error);
            }
        };
        fetchTransactions();
    }, []);

    return (

        <div>

        <Navbar/> 
        <div style={{ padding: '20px', background: '#f9f9f9' }}>
            <Typography variant="h4" gutterBottom align="center" style={{ color: '#333' }}>
                Transaction History
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ background: '#3491e5' }}>
                            <TableCell><Typography variant="h6">Sender</Typography></TableCell>
                            <TableCell><Typography variant="h6">Receiver</Typography></TableCell>
                            <TableCell><Typography variant="h6">Amount</Typography></TableCell>
                            <TableCell><Typography variant="h6">Type</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((transaction, index) => (
                            <TableRow key={index}>
                                <TableCell>{transaction.sender}</TableCell>
                                <TableCell>{transaction.receiver}</TableCell>
                                <TableCell>{transaction.amount}</TableCell>
                                <TableCell>{transaction.typeOfTransaction}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </div>
    );
};

export default TransactionHistory;

