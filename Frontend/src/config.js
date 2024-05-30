import { createChatBotMessage } from 'react-chatbot-kit';

import LearningOptions from "./components/LearningOptions";
import LinkList from './components/LinkList';
const config = { 
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to know about JQ Bank?",{
    widget: "learningOptions",
  })],
  ...createChatBotMessage,
  widgets: [
    {
        widgetName: "learningOptions",
       widgetFunc: (props) => <LearningOptions {...props} />,
    },{
        widgetName: "bank",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
              {
                text: "Click here to know more about JQ Bank",
                url:
                  
                  "https://www.jpmorgan.com/global",
                id: 1,
              },
            
            ],
          },
    }
],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config