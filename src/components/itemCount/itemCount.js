import { useState } from 'react';
import './itemCount.css';

export const ItemCount = () => {
    const [count, setCount] = useState(0);

    const addOne = () => {setCount(count + 1)}
    const restOne = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }

    return (
        <>
            {/* Botón para sumar 1 al contador */}
            <button onClick={addOne}> + </button>

            <p> {count} </p>

            {/* Botón para restar 1 al contador */}
            <button onClick={restOne}> - </button>
        </>
    );
}