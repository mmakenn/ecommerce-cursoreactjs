import { useState } from 'react';
import './itemCount.css';
import { Container, Button } from 'react-bootstrap';

export const ItemCount = (props) => {
    const [count, setCount] = useState(1);

    const addOne = () => {
        if (count + 1 <= props.stock){
            setCount(count + 1);
        }
    }

    const restOne = () => {
        if (count > 0){
            setCount(count - 1);
        }
    }

    return (
        <>
        <Container className='d-flex justify-content-around item-count'>
            {/* Botón para restar 1 al contador */}
            <Button onClick={restOne} variant='warning' className='d-flex align-items-center'> - </Button>

            <p> {count} </p>

            {/* Botón para sumar 1 al contador */}
            <Button onClick={addOne} variant='warning' className='d-flex align-items-center'> + </Button>
        </Container>
        <Button variant='warning' className='m-3' onClick={() => props.addToCart(count)}>Agregar al carrito</Button>
        </>
    );
}