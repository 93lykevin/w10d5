import React from 'react';
// module.exports = () => <h3>Todo List goes here!</h3>;
import TodoListItem from './todo_list_item';


class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchAllTodos();
  }

  render () {
    // debugger;
    return( 
      <div>
        <ul>
          {
            this.props.todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)
          }
        </ul>
      </div>
    );  
  }
}

export default TodoList;