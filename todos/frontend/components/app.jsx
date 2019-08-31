import React from 'react';
import TodoListContainer from './todos/todo_list_container';
import TodoFormContainer from './todos/todo_form_container';

const App = () => {
  return(
    <div>
      < TodoListContainer />
      <TodoFormContainer />
    </div>
  );
};

export default App;
