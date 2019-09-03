import axios from 'axios';
import {
      GET_ERRORS,
  
  } from './types'


// / Add Todo
export const addTodo = (todoData, history) => dispatch => {
  axios
    .post('api/users/add-todo', todoData)
    .then(res =>res.json(todoData))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Todo
export const deleteTodo = id => dispatch => {
  axios
    .delete(`/api/todo/todos/:${id}`)
    .then(res => window.location('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};