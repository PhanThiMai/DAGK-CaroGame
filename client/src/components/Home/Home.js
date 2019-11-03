
import React from 'react';
import Game from '../../containers/Game'
import Profile from '../Profile/Profile'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {
    Route, Switch, Redirect
} from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        const isLogin = true;
        return (
            <div className="pl-5 pr-5">
                <Navbar bg="light" className="mb-5">
                    <Navbar.Brand href="#">CaroGame</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown title={this.state.username} id="basic-nav-dropdown" className="mr-3">
                                <NavDropdown.Item href="/me">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={this.handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/game" >
                        {!isLogin ? <Redirect to="/" /> : <Game />}
                    </Route>

                    <Route exact path="/me" >
                        {!isLogin ? <Redirect to="/" /> : <Profile />}
                    </Route>
                </Switch>
            </div>

        );
    }
}

export default Home;

