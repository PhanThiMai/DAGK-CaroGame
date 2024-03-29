import React from 'react';
import Board from './Board';
import './Game.scss';
import * as helper from './Helper'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'




class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reOdered: false,
            username: 'Mai'
        };
    }

    handleClick(i) {
        const { history, stepNumber, winner, xIsNext, values } = this.props.game;
        const history1 = history.slice(0, stepNumber + 1);
        const current = history1[history1.length - 1];
        const squares = current.squares.slice();

        if (squares[i] || winner) {
            return;
        }
        const column = i % 20;
        const row = (i - column) / 20;

        squares[i] = xIsNext ? 'X' : 'O';
        const hangDoc = helper.checkHangDoc(row, column, i, squares);
        const hangNgang = helper.checkHangNgang(row, column, i, squares);
        const hangCheo1 = helper.checkHangCheo1(row, column, i, squares);
        const hangCheo2 = helper.checkHangCheo2(row, column, i, squares);
        const result = hangDoc || hangNgang || hangCheo1 || hangCheo2;
        values[stepNumber + 1] = result;

        this.props.handleClickSquare(i, result)
        if (!result) {
            const randomvalue = helper.randomSquareForComputerTurn(squares, i - 5, i + 5)
            this.props.handleClickSquare(randomvalue, result)
        }


    }

    jumpTo(step) {
        this.props.jumpTo(step);
    }

    restart() {
        this.props.restart();
        this.setState({
            reOdered: false
        });
    }

    handleLogout = () => {
        this.props.logout();
    }

    componentDidMount = () => {
        const username = localStorage.getItem("username")
        this.setState({
            username
        })
    }

    render() {
        const {
            history,
            winner,
            values,
            stepNumber
        } = this.props.game;
        const { reOdered } = this.state;

        const current = history[stepNumber];
        const result = values[stepNumber];
        let moves = null;

        if (reOdered) {
            moves = history.map((step, move) => {
                const newMove = history.length - move - 1;
                const desc = newMove ? `Go to move #  ${newMove}` : 'Go to game start';
                if (move % 2 === 0)
                    return (
                        <li key={move.toString()}>
                            <Button
                                variant="secondary"
                                className="btn my-1"
                                onClick={() => this.jumpTo(newMove)}
                            >
                                {desc}
                            </Button>
                        </li>
                    );

            });
        } else {
            moves = history.map((step, move) => {
                const desc = move ? `Go to move #  ${move}` : 'Go to game start';
                if (move % 2 === 0)
                    return (
                        <li key={move.toString()}>
                            <Button
                                variant="secondary"
                                className="btn my-1"
                                onClick={() => this.jumpTo(move)}
                            >
                                {desc}
                            </Button>
                        </li>
                    );
            });
        }

        let status;
        if (winner) {
            status = `Winner:${winner}`;
        } else {
            status = `Your turn`;
        }

        return (
            <div className="game pt-1">

                <Navbar bg="light" className="mb-5">
                    <Navbar.Brand href="#">CaroGame</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown title={this.state.username} id="basic-nav-dropdown" className="mr-3">
                                <NavLink to="/me" className="profile-item" >Profile</NavLink>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={this.handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div className="d-flex">
                    <Button
                        color="primary"
                        className="mb-4 ml-5 mr-5"
                        onClick={() => this.restart()}
                    >
                        Restart
            </Button>
                    <h5 className="ml-5">{status}</h5>
                </div>

                <div className="row">
                    <div className="col-8">
                        <Board
                            squares={current.squares}
                            onClick={i => this.handleClick(i)}
                            values={result}
                        />
                    </div>
                    <div className="game-info ">
                        <h4>Infomation</h4>
                        <hr />
                        <Button
                            variant="primary m-1 p-1"
                            className="btn"
                            onClick={() => {
                                this.setState({ reOdered: !reOdered });
                            }}
                        >
                            Re-odered
                         </Button>
                        <ol className="moves">{moves}</ol>
                    </div>



                </div>


            </div>


        );
    }
}

export default Game;
