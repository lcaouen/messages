import { combineReducers } from "redux";

const initialState = {
  messages: []
};

function MessagesReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MESSAGES":
      return {
        ...state,
        messages: [...action.messages]
      };

    default:
      return state;
  }
}

const Messages = combineReducers({
  MessagesReducer
});

export default Messages;
