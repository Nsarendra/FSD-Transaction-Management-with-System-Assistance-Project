import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "About JQ Bank",  handler: props.actionProvider.createTeam, id: 6 },
    { text: "More about JQ Bank?",  handler: props.actionProvider.handleJavascriptList, id: 1 },
    { text: "How to transfer money?",  handler: props.actionProvider.transferMoney, id: 3 },
   
    { text: "Security", handler: props.actionProvider.security, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;