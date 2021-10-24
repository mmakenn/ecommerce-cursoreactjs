import { useState } from 'react';
import './itemCount2.css';

export const ItemCount2 = (props) => {
    const [count, setCount] = useState(0);
    return (
        <>
            {/* Botón para sumar 1 al contador */}
            <button onClick={() => props.adding(count, setCount)}> + </button>

            <p> {count} </p>

            {/* Botón para restar 1 al contador */}
            <button onClick={() => props.resting(count, setCount)}> - </button>
        </>
    );
}