
export const checkHangDoc = (row, column, value, squares) => {
    let begin;
    let end;
    let count = 1;

    if (row === 0) {
        begin = 0;
        end = 4;
    } else if (row === 19) {
        end = 19;
        begin = 19 - 4;
    } else {
        while (count < 5) {
            if (row - count >= 0) begin = row - count;
            if (row + count <= 19) end = row + count;
            count += 1;
        }
    }

    if (squares !== undefined) {
        for (let i = 0; i <= end - begin - 4; i += 1) {
            if (
                squares[20 * (begin + i - 1) + column] === null ||
                squares[20 * (begin + i + 5) + column] === null
            )
                if (
                    squares[20 * (begin + i) + column] &&
                    squares[column + 20 * (begin + i + 1)] ===
                    squares[column + 20 * (begin + i)] &&
                    squares[column + 20 * (begin + i + 2)] ===
                    squares[column + 20 * (begin + i)] &&
                    squares[column + 20 * (begin + i + 3)] ===
                    squares[column + 20 * (begin + i)] &&
                    squares[column + 20 * (begin + i + 4)] ===
                    squares[column + 20 * (begin + i)]
                )
                    return [
                        20 * (begin + i) + column,
                        column + 20 * (begin + i + 1),
                        column + 20 * (begin + i + 2),
                        column + 20 * (begin + i + 3),
                        column + 20 * (begin + i + 4)
                    ];
        }
    }

    return null;
}

export const checkHangNgang = (row, column, value, squares) => {
    let begin;
    let end;
    let count = 1;
    if (column === 0) {
        begin = 0;
        end = 4;
    } else if (column === 19) {
        end = 19;
        begin = 19 - 4;
    } else {
        while (count < 5) {
            if (column - count >= 0) begin = column - count;
            if (column + count <= 19) end = column + count;
            count += 1;
        }
    }

    if (squares !== undefined) {
        for (let i = 0; i <= end - begin - 4; i += 1) {
            if (squares[value - 5 + i] === null || squares[value - i + 1] === null)
                if (
                    squares[row * 20 + begin + i] &&
                    squares[row * 20 + begin + i + 1] === squares[row * 20 + begin + i] &&
                    squares[row * 20 + begin + i + 2] === squares[row * 20 + begin + i] &&
                    squares[row * 20 + begin + i + 3] === squares[row * 20 + begin + i] &&
                    squares[row * 20 + begin + i + 4] === squares[row * 20 + begin + i]
                )
                    return [
                        row * 20 + begin + i,
                        row * 20 + begin + i + 1,
                        row * 20 + begin + i + 2,
                        row * 20 + begin + i + 3,
                        row * 20 + begin + i + 4
                    ];
        }
    }

    return null;
}

export const checkHangCheo1 = (row, column, value, squares) => {
    let row1;
    let column1;
    let row2;
    let count = 1;
    if (row === 19 && column === 0) return null;
    if (row === 0 || column === 0) {
        row1 = row;
        column1 = column;
        row2 = row + 4;
    } else if (row === 19) {
        row1 = row - 4;
        column1 = column - 4;
        row2 = row;
    } else {
        while (count < 5) {
            if (row - count >= 0 && column - count >= 0) {
                row1 = row - count;
                column1 = column - count;
            }
            if (row + count <= 19 && column + count <= 19) {
                row2 = row + count;
            }
            count += 1;
        }
    }

    if (squares !== undefined) {
        for (let i = 0; i <= row2 - row1 - 4; i += 1) {
            if (
                squares[20 * (row1 + i - 1) + column1 + i - 1] === null ||
                squares[20 * (row1 + i + 5) + column1 + i + 5] === null
            )
                if (
                    squares[20 * (row1 + i) + column1] &&
                    squares[20 * (row1 + i + 1) + column1 + 1] ===
                    squares[20 * (row1 + i) + column1] &&
                    squares[20 * (row1 + i + 2) + column1 + 2] ===
                    squares[20 * (row1 + i) + column1] &&
                    squares[20 * (row1 + i + 3) + column1 + 3] ===
                    squares[20 * (row1 + i) + column1] &&
                    squares[20 * (row1 + i + 4) + column1 + 4] ===
                    squares[20 * (row1 + i) + column1]
                )
                    return [
                        20 * (row1 + i) + column1,
                        20 * (row1 + i + 1) + column1 + 1,
                        20 * (row1 + i + 2) + column1 + 2,
                        20 * (row1 + i + 3) + column1 + 3,
                        20 * (row1 + i + 4) + column1 + 4
                    ];
        }
    }

    return null;
}

export const checkHangCheo2 = (row, column, value, squares) => {
    let row1;
    let column1;
    let column2;
    let count = 1;

    if (row === 19 || column === 19) {
        return null;
    }
    if (column === 0) {
        row1 = row;
        column1 = column;
        column2 = row + 4;
    } else if (row === 0 || column === 19) {
        row1 = row;
        column1 = column;
        column2 = column - 4;
    } else {
        while (count < 5) {
            if (row - count >= 0 && column + count <= 19) {
                row1 = row - count;
                column1 = column + count;
            }
            if (row + count <= 19 && column - count >= 0) {
                column2 = column - count;
            }
            count += 1;
        }
    }

    if (squares !== undefined) {
        for (let i = 0; i <= column1 - column2 - 4; i += 1) {
            if (
                squares[20 * (row1 + i - 1) + column1 + i + 1] === null ||
                squares[20 * (row1 + i + 5) + column1 + i - 5] === null
            )
                if (
                    squares[20 * (row1 + i) + column1] &&
                    squares[20 * (row1 + i + 1) + column1 - 1] ===
                    squares[20 * (row1 + i) + column1] &&
                    squares[20 * (row1 + i + 2) + column1 - 2] ===
                    squares[20 * (row1 + i) + column1] &&
                    squares[20 * (row1 + i + 3) + column1 - 3] ===
                    squares[20 * (row1 + i) + column1] &&
                    squares[20 * (row1 + i + 4) + column1 - 4] ===
                    squares[20 * (row1 + i) + column1]
                )
                    return [
                        20 * (row1 + i) + column1,
                        20 * (row1 + i + 1) + column1 - 1,
                        20 * (row1 + i + 2) + column1 - 2,
                        20 * (row1 + i + 3) + column1 - 3,
                        20 * (row1 + i + 4) + column1 - 4
                    ];
        }
    }

    return null;
}

export const randomSquareForComputerTurn = (squares, min, max) => {
    if (!squares)
        return

    if (min < 0) min = 0;
    if (max >= 400) max = 400
    min = Math.ceil(min);
    max = Math.floor(max);

    let value;
    let count = 1;

    while (true) {
        //  value = Math.round(Math.random() * 400)

        if (count >= max - min) {
            value = Math.round(Math.random() * 400)
        }
        value = Math.floor(Math.random() * (max - min)) + min;
        if (value && (!squares[value])) {
            break
        }
        count++;
    }

    return value;

    // console.log(value)
}

