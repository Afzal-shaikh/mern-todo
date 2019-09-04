import React, { Component } from 'react'
import { fetchTodoList } from '../../actions/todoActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TodoList extends Component {


  constructor(){
    super();
    this.state={
      todos:[]
    }
  }

  componentDidMount(){
    const todoData = fetchTodoList(this.props.auth.user.id)
    console.log(todoData)
  }

  render() {
    return (
      <div>
        <h1>todolist</h1>
      </div>
    )
  }
}


TodoList.propTypes = {
  fetchTodoList: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { fetchTodoList })(TodoList);