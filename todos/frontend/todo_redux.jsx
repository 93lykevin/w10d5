import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos, fetchAllTodos } from './actions/todo_actions';
import Root from './components/root';
import allTodos from './reducers/selectors';
import {fetchTodos} from './util/todo_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  //initialState
  const store = configureStore({});
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos; ////// <--- TESTING
  window.fetchAllTodos = fetchAllTodos;
  ReactDOM.render(<Root store={store}/>, root);
});
