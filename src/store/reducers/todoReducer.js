import { ADD_TODO, TOGGLE_TODO } from '../actions';

// currentState = reducer(currentState, action) // returns an object that has the same shape as our state
const initialTodoState = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false,
      notes: ''
    }
  ]
};

export const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
};
