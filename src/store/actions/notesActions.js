export const ADD_NOTE = 'ADD_NOTE';
export const TOGGLE_NOTE = 'TOGGLE_NOTE';

export const addNote = note => {
  console.log(note);
  return {
    type: ADD_NOTE,
    payload: {
      value: note,
      completed: false
    }
  };
};

export const toggleNote = index => {
  console.log(index);
  return {
    type: TOGGLE_NOTE,
    payload: index
  };
};
