import { ADD_NOTE, TOGGLE_NOTE } from '../actions';

// currentState = reducer(currentState, action) // returns an object that has the same shape as our state
const initialState = {
  notes: [
    {
      value: 'Walk the dog.',
      completed: false
    }
  ]
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case TOGGLE_NOTE:
      return {
        ...state,
        notes: state.notes.map((notes, index) => {
          if (index === action.payload) {
            return { ...notes, completed: !notes.completed };
          } else {
            return notes;
          }
        })
      };
    default:
      return state;
  }
};
