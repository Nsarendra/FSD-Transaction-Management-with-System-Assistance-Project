// import React from 'react'

import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import './App.css';

import ChatIcon from '@mui/icons-material/Chat';

function OpenChatBot() {
  return (
    // <div>
    //   <Chatbot className='chatbot' config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
    // </div>

    <div className="chatbot-container">
      <Chatbot className='chatbot' config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
    </div>
  )
}

export default OpenChatBot
