import React from 'react';
import { Button } from 'react-bootstrap';

function Square(props) {
    const { onClick, value, values, i } = props;
    let className = 'square';

    if (values !== null && values !== undefined && values.length !== 0) {
        if (values.indexOf(i) !== -1) {
            className = 'square1';
        } else className = 'square';
    }

    return (
        <Button variant="warning" className={className} onClick={onClick}>
            {value}
        </Button>
    );
}
export default Square;
