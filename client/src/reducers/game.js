import * as types from '../constant/ActionType'


let initialState = {
    history: [
        {
            squares: Array(400).fill(null)
        }
    ],
    stepNumber: 0,
    xIsNext: true,
    winner: null,
    values: [null],
    isLogin: localStorage.getItem("token") && true,
    username: localStorage.getItem("username") || ''

}


let game = (state = initialState, action) => {
    const { history, stepNumber, xIsNext, values } = state;
    const history1 = history.slice(0, stepNumber + 1);
    const current = history1[history1.length - 1];
    const squares = current.squares.slice();
    switch (action.type) {

        case types.HANDLE_CLICK_SQUARE:
            const { i, checkAround } = action;
            squares[i] = xIsNext ? 'X' : 'O';

            if (checkAround) {
                return {
                    ...state,
                    winner: squares[i],
                    values,
                    history: history1.concat([{ squares }]),
                    stepNumber: history1.length

                }
            } else {
                return {
                    ...state,
                    history: history1.concat([
                        {
                            squares
                        }
                    ]),
                    stepNumber: history1.length,
                    xIsNext: !xIsNext,
                    values
                }
            }

        case types.JUMP_TO:
            const { step } = action;
            const result = values[step];
            if (!result) {
                return {
                    ...state,
                    stepNumber: step,
                    xIsNext: step % 2 === 0,
                    winner: null
                }
            } else {
                return {
                    ...state,
                    stepNumber: step
                }
            }

        case types.RESTART:
            return {
                ...state,
                history: [
                    {
                        squares: Array(400).fill(null)
                    }
                ],
                stepNumber: 0,
                xIsNext: true,
                winner: null,
                values: [null],
            }
        case types.LOG_OUT:
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            return {
                ...state,
                isLogin: false
            }



        default:
            return state
    }
}

export default game;

