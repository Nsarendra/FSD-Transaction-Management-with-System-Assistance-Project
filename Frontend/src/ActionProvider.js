class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend.")
      this.updateChatbotState(greetingMessage)
    }

    handleJavascriptList = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got the following resources for you on JQ Bank:",
          {
            // widget: "javascriptLinks",
            widget:"bank"
          }
        );
    
        this.updateChatbotState(message);
      };

      createTeam=()=>{
        const message=this.createChatBotMessage("Welcome to JQ Bank, where managing your finances is simple and secure. Whether you need to add funds, transfer money, or review your transactions, we're here to help you every step of the way.");
        this.updateChatbotState(message);
      }

      transferMoney=()=>{
        const message=this.createChatBotMessage("Begin your journey with JQ Bank by registering on our platform. Upon successful registration, access your account through our secure login portal. Navigate to the 'Transfer Money' feature, where you can seamlessly initiate transfers by entering the recipient's account number, specifying the amount, inputting your confidential PIN, and confirming your transaction with ease.");
        this.updateChatbotState(message);
      }

      nullMessage=()=>{
        const message=this.createChatBotMessage("Please provide something to help");
        this.updateChatbotState(message);
      }

      commonMessage=()=>{
        const message=this.createChatBotMessage("Please ask something related to the bank");
        this.updateChatbotState(message);
      }

      security=()=>{
        const message=this.createChatBotMessage("At JQ Bank, safeguarding your assets is our top priority. We employ state-of-the-art encryption protocols and robust security measures to ensure the utmost protection of your financial information and transactions.");
        this.updateChatbotState(message);
      }
    
    updateChatbotState(message) {
   
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider