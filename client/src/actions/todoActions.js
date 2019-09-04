import axios from 'axios';
import {
      GET_ERRORS, FETCH_TODOLIST,
  
  } from './types'


// / Add Todo
export const addTodo = (todoData, history) => dispatch => {
  axios
    .post('api/users/add-todo', todoData)
    .then(res =>{history.push('/dashboard'); })
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


// get todolist
export const fetchTodoList = id => dispatch => {
    axios 
    .get('/api/users/todolist')
    .then(res=> {res.json(res.data); 
    dispatch({
      type : FETCH_TODOLIST,
      payload : res.data
    })})
    .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
}