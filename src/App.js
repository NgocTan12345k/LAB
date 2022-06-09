import React, { Component } from 'react';
import logo from './logo.svg'
import Main from './components/MainComponent';
import { Navbar, NavbarBrand, navbarBrand } from 'reactstrap';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { DISHES } from './shared/dishes';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;