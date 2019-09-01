import React, { Component } from 'react';
import axios from 'axios';

 class Dashboard extends Component {

    constructor(){
        super();
        this.state={
           content : ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name ]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();

        const newTodo={
           content:this.state.content
        }
        axios.post('/api/user/add-todo',newTodo)
        .then(res => console.log(res.data))
        .catch(err=> console.log(err));
    }

    render() {
        return (
            <div>

<div className="register  ">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Add-TODO</h1>
                  <form onSubmit={this.onSubmit}>


                    <div className="form-group">
                      <input type="text"
                       className="form-control form-control-lg" 
                       placeholder="Add a new Todo" name="todo"
                        value={this.state.todo}
                        onChange={this.onChange}
                         />
                    </div>

                    <input type="submit" className="btn btn-info btn-block mt-2" value="Add"/>
                </form>
               </div>
               </div>
               </div>
               </div> 
            </div>
        )
    }
}

export default Dashboard