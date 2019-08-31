import React from 'react';


const TodoListItem = ({ todo }) => {
  return (
    <ul>
      <div>Id: {todo.id}</div>
      <li>Title: {todo.title}</li>
      <li>Body: {todo.body}</li>
      <br/>
    </ul>
  );
};


export default TodoListItem;