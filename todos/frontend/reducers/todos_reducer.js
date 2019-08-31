import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "remove stains",
    body: "with bleach",
    done: false
  },
  2: {
    id: 2,
    title: "wash truck",
    body: "with tears",
    done: true
  }
};

export const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  
  let nextState = {}; 
  // const nextTodos = Object.assign({}, action.todos);

  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.map(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;

    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;

    default:
      return state;
  }
};

const newTodos = {
  3: {
    id: 3,
    title: "go jog",
    body: "at beach",
    done: false
  },
  4: {
    id: 4,
    title: "eat food",
    body: "with spoon",
    done: true
  }
};