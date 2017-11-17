import { createStore } from 'redux';
import reducer from './reducer.js';

// INITIAL STATE
const initialState = {
  currentUser: {
    firstName: '',
    lastName: '',
    gender: '',
    hairColor: '',
    eyeColor: '',
    hobby: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
  }
}

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
