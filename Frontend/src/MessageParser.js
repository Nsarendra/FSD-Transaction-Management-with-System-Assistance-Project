class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }

      else if (lowerCaseMessage.includes("more about JQ Bank")) {
        this.actionProvider.handleJavascriptList();
      }

      // if (lowerCaseMessage.includes("create team")) {
      //   this.actionProvider.createTeam();
      // }

      else if (lowerCaseMessage.includes("bank")) {
        this.actionProvider.createTeam();
      }

      else if (message.length===0) {
        this.actionProvider.nullMessage();
      }

      else  {
        this.actionProvider.commonMessage();
      }

      

    }
  }
  
  export default MessageParser