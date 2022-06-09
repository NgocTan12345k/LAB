import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Funix</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Funix</h1>
                                <p>Welcome to Funix</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;