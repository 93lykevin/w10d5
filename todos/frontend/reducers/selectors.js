
const allTodos = (state) => {
  const keys = Object.keys(state.todos);
  // debugger
  const todosArr = keys.map(key => {
    return state.todos[key];
  });

  return todosArr;
};



export default allTodos;