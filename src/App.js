import React, { Component } from 'react';
import logo from './logo.svg'
import Main from './components/MainComponent';
import { Navbar, NavbarBrand, navbarBrand } from 'reactstrap';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {


  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;