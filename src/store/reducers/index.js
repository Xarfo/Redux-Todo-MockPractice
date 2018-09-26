import { combineReducers } from 'redux';

import { todoReducer } from './todoReducer';
import { notesReducer } from './notesReducer';

export default combineReducers({
  todoReducer,
  notesReducer
});
