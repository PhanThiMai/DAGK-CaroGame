import React from 'react';
import './Profile.scss'
import '../Login/Login.scss'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            newPassword: '',
            retypePassword: '',
            errors: false
        };
    }

    handleFocus = e => {
        this.setState({
            errors: false
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleClick = e => {
        e.preventDefault()
    }

    handleLogout = () => {
        this.props.logout();
    }
    componentDidMount = () => {
        const { profile } = this.props;
        this.setState({
            username: profile ? profile.username : ''
        })
    }


    render() {
        const { username, password, errors, newPassword, retypePassword } = this.state
        const { profile } = this.props
        const active = username.trim() || (password.trim() && newPassword.trim() && retypePassword.trim());

        return (
            <div className="pl-5 pr-5">
                <Navbar bg="light" className="mb-5">
                    <Navbar>
                        <Link to="/game" className="brand-title">
                            CaroGame
                        </Link>
                    </Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown title={profile ? profile.username : username} id="basic-nav-dropdown" className="mr-3">
                                <NavDropdown.Item >Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={this.handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="loginModal profile-container mt-5">
                    <div className="loginT mt-5 change-profile-title" >Change Profile</div>
                    <div className="row">
                        <div className="col-7">
                            <div className="activeR">
                                <label className="usernameLabel">USERNAME</label>
                                <input type="text" name="username" id="username"
                                    placeholder="Enter your username..."
                                    onFocus={this.handleFocus}
                                    value={username}
                                    className={errors ? 'errorInput' : 'normalInput'}
                                    onChange={this.onChange} />
                            </div>

                            <hr width="300px" />
                            <div className="activeR">
                                <label className="passwordLabel">PASSWORD</label>
                                <input type="password" name="password" id="password"
                                    placeholder="Enter your password..."
                                    value={password}
                                    onFocus={this.handleFocus}
                                    className={errors ? 'errorInput' : 'normalInput'}
                                    onChange={this.onChange} />
                            </div>
                            <div className="activeR">
                                <label className="passwordLabel">NEW PASSWORD</label>
                                <input type="password" name="newPassword" id="newpassword"
                                    placeholder="Enter new password ... "
                                    value={newPassword}
                                    onFocus={this.handleFocus}
                                    className={errors ? 'errorInput' : 'normalInput'}
                                    onChange={this.onChange} />
                            </div>

                            <div className="activeR">
                                <label className="passwordLabel">NEW PASSWORD</label>
                                <input type="password" name="retypePassword" id="renewpassword"
                                    placeholder="Retype new password ..."
                                    value={retypePassword}
                                    onFocus={this.handleFocus}
                                    className={errors ? 'errorInput' : 'normalInput'}
                                    onChange={this.onChange} />
                            </div>


                        </div>

                        <div className="col-4">
                            <img
                                className="img-thumbnail"
                                alt="avatar"
                                src="http://placehold.it/1000"
                                width="150vh"
                                height="150vh">
                            </img>
                            <h6 className="mt-1 ml-3">Change avatar</h6>
                        </div>
                    </div>


                    <div className="d-flex">
                        <button onClick={this.handleClick} className='loginButtonActive '><div className="buttonText mb-5" >Cancel</div></button>
                        <button onClick={this.handleClick} className={active ? 'loginButtonActive ' : 'loginButton'}><div className="buttonText mb-5" >Change</div></button>

                    </div>

                </div>


            </div>

        );
    }
}

export default Profile;

