import React from 'react';
import { Button } from 'react-bootstrap';
import Board from './Board';
import './Game.scss';
import * as helper from './Helper'



class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reOdered: false
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

    render() {
        const {
            history,
            winner,
            values,
            stepNumber,
            xIsNext
        } = this.props.game;
        const { reOdered } = this.state;

        const current = history[stepNumber];
        const result = values[stepNumber];
        let moves = null;

        if (reOdered) {
            moves = history.map((step, move) => {
                const newMove = history.length - move - 1;
                const desc = newMove ? `Go to move #  ${newMove}` : 'Go to game start';
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
            status = `Next player:${xIsNext ? 'X' : 'O'}`;
        }

        return (
            <div className="game  ">

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
                            outline
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
