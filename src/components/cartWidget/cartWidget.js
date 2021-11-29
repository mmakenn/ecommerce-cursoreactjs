import './cartWidget.css';
import cartWidget from './cart.png';
import { Container } from 'react-bootstrap';
import { useCartContext } from '../../context/cartContext';

export const CartWidget = () => {
    /* Renderiza el icono de carrito. 
        Muestra la cantidad de items que contiene el carrito, se actualiza automáticamente */
    const cart = useCartContext();    
    return (
        <Container className='d-flex'>
            <img src={cartWidget} className='cart-img' alt='Cart Widget'/>
            <p>( {cart.itemsQuantity} )</p>
        </Container>
    );
}