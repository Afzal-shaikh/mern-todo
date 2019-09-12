import React, { Component } from 'react'
import axios from 'axios';

class TodoList extends Component {


  constructor(){
    super();
    this.state={
      todos:[]
    }
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount(){

    return axios 
    .get('/api/users/todolist')
    .then(res=> {
      // console.log(res.data)
      this.setState ( {
        todos : res.data
      })
    })
    .catch(err =>
      console.log(err)
      );
  
  }

  onDeleteClick(id){
    console.log(" Delete button clicked")
     axios
    .delete(`/todos/${id}`)
    .then(res =>
       console.log(res.data)
      //  window.location('/dashboard')
       
       )
    .catch(err => 
      console.log("Delete error : " ,err)
    );
  }

  render() { 

    const Todo = this.state.todos.map(todo => (
      <tr key={todo._id}>
        <td>{todo.content}</td>
        <td>{todo._id}</td>
        <td>
          <button
             onClick={() => {this.onDeleteClick(todo._id)}}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));







     



    return (
        <div>
        <h4 className="mb-4">Todos List </h4>
        <table className="table">
          <thead>
            <tr>
              <th>Todo</th>
              {/* <th>Status</th> */}
              <th></th>
              <th></th>
              <th />
            </tr>
            {Todo}
          </thead>
        </table>
      </div>
    )
  }
}

export default TodoList;