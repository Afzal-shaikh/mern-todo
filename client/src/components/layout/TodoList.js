import React, { Component } from 'react';
import { deleteTodo } from '../../actions/todoActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';;


class Todo extends Component {
  onDeleteClick(id) {
    this.props.deleteTodo(id);
  }

  render() {
      const Todo= ''
    // const Todo =  this.props.todos.map(todo =>
    //      (
    //   <tr key={todo._id}>
    //     <td>{todo.company}</td>
    //     <td>{todo.title}</td>
    //     <td>
    //       <button
    //         onClick={this.onDeleteClick.bind(this, todo._id)}
    //         className="btn btn-danger"
    //       >
    //         Delete
    //       </button>
    //     </td>
    //   </tr>
    // ));
    return (
      <div>
        <h4 className="mb-4">Todo </h4>
        <table className="table">
          <thead>
            <tr>
              <th>Todo</th>
              <th>Status</th>
              <th></th>
              <th />
            </tr>
            {Todo}
          </thead>
        </table>
      </div>
    );
  }
}

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired
};

export default connect(null, { deleteTodo })(Todo);
