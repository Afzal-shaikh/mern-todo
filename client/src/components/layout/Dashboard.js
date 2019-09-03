import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


class Dashboard extends Component {
    render() {

         
        console.log(this.props.auth)
        return (
            <div>
               
                <h1>Dashboard</h1>
                <h1></h1>
                <TodoForm  />
                <TodoList />
            </div>
        )
    }
}

Dashboard.propTypes = {
  
    auth: PropTypes.object.isRequired,
    
  };


const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps)(Dashboard);