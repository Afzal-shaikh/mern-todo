import React, { Component } from 'react';
import {BrowserRouter as Router , Route } from 'react-router-dom';



import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/layout/Dashboard'


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        {/* <Landing  */}
        <Route exact path = "/" component={Landing} />
        
        <div className="container">
        <Route exact path = "/register" component={Register} />
        <Route exact path = "/login" component={Login} />
        <Route exact path = "/dashboard" component={Dashboard} />
        </div>
        


        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
