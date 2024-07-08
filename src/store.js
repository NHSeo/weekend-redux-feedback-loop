import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const initialState = {
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
};

const feedbackReducer = (state = initialState, action) => {
  if (action.type === 'SET_FEELING') {
    return { ...state, feeling: action.payload };
  } else if (action.type === 'SET_UNDERSTANDING') {
    return { ...state, understanding: action.payload };
  } else if (action.type === 'SET_SUPPORT') {
    return { ...state, support: action.payload };
  } else if (action.type === 'SET_COMMENTS') {
    return { ...state, comments: action.payload };
  } else if (action.type === 'RESET_FEEDBACK') {
    return initialState;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedback: feedbackReducer,
  }),
  applyMiddleware(logger)
);

export default storeInstance;
