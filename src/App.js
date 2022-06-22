import React, { Component } from 'react';
import logo from './logo.svg'
import Main from './components/MainComponent';
import { Navbar, NavbarBrand, navbarBrand } from 'reactstrap';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { DISHES } from './shared/dishes';
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
      </Provider>
    );
  }
}

export default App;