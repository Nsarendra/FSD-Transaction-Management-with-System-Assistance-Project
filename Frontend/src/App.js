import React, { useState } from "react";

import 'react-chatbot-kit/build/main.css'
import './App.css';



import ChatIcon from '@mui/icons-material/Chat';
import OpenChatBot from "./OpenChatBot";

import { BrowserRouter as Router, Route, Routes, Navigate  } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AccountPage from "./components/AccountPage";
import AddMoney from "./components/AddMoney";
import TransferMoney from "./components/TransferMoney";
import TransactionHistory from "./components/TransactionHistory";

function App() {

  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  const toggleChatBot = () => {
    setIsChatBotOpen(prevState => !prevState);
  };
 

  return (
    <div className="App">
      <header className="App-header">
      

        { <ChatIcon onClick={toggleChatBot} style={{ cursor: 'pointer' }} className="chat-icon"/>}
        {isChatBotOpen && <OpenChatBot />}

        <Router>
      <Routes>
      
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/Addmoney" element={<AddMoney />} />
        <Route path="/transferMoney" element={<TransferMoney />} />
        <Route path="/transactionHistory" element={<TransactionHistory />} />
        
        

      </Routes>
    </Router>

      </header>
    </div>

    
  );
}

export default App;