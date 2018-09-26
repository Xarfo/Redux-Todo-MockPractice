import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo } from '../store/actions';

import TodoList from '../components/TodoList';

class TodoContainer extends React.Component {
  state = {
    inputText: ''
  };

  handleChange = event => this.setState({ inputText: event.target.value });

  addTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state.inputText);
  };

  toggleTodo = index => {
    this.props.toggleTodo(index);
  };

  render() {
    return (
      <TodoList
        handleChange={this.handleChange}
        inputText={this.state.inputText}
        toggleTodo={this.toggleTodo}
        todoList={this.props.todos}
        addTodo={this.addTodo}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoContainer); // currying
