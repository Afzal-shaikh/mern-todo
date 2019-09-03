import axios from 'axios';
import {
      GET_ERRORS,
  
  } from './types'


// / Add Todo
export const addTodo = (todoData, history) => dispatch => {
  axios
    .post('/add-todo', todoData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Experience
export const deleteTodo = id => dispatch => {
  axios
    .delete(`/api/todo/todos/${id}`)
    .then(res =>
        console.log(res.data)
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};