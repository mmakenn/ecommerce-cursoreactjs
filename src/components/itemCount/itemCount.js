import { useState } from 'react';
import './itemCount.css';
import { Container, Button } from 'react-bootstrap';

export const ItemCount = () => {
    const [count, setCount] = useState(0);

    const addOne = () => {setCount(count + 1)}
    const restOne = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }

    return (
        <Container className='d-flex justify-content-around item-count'>
            {/* Botón para restar 1 al contador */}
            <Button onClick={restOne} variant='warning' className='d-flex align-items-center'> - </Button>

            <p> {count} </p>

            {/* Botón para sumar 1 al contador */}
            <Button onClick={addOne} variant='warning' className='d-flex align-items-center'> + </Button>
        </Container>
    );
}