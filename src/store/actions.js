import Api from "../api/index";

export const getMessages = () => dispatch => {
  let messages = Api.Messages.getMessages();
  dispatch({ type: "GET_MESSAGES", messages: messages });
};

export const addMessage = message => dispatch => {
  Api.Messages.addMessage(message);
  let messages = Api.Messages.getMessages();
  dispatch({ type: "GET_MESSAGES", messages: messages });
};
