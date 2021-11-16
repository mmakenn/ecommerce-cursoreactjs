import './cartWidget.css';
import cartWidget from './cart.png';
import { Container } from 'react-bootstrap';
import { useCartContext } from '../../context/cartContext';
import { useEffect, useState } from 'react';

export const CartWidget = () => {
    const cart = useCartContext();
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(cart.getTotalQuantity());
    }
    , [cart]);

    return (
        <Container className='d-flex'>
            <img src={cartWidget} alt='Cart Widget'/>
            <p>( {quantity} )</p>
        </Container>
    );
}