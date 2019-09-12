import axios from 'axios';



// / Add Todo
export const addTodo = (todoData, history) => dispatch => {
  axios
    .post('api/users/add-todo', todoData)
    .then(res =>
      {history.push('/dashboard'); }
      )
    .catch(err => 
      console.log(err)
    );
};





  