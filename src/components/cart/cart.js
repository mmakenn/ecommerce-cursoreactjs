import { useCartContext } from "../../context/cartContext";
import { Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CartList } from '../cartList/cartList'

export const Cart = () => {
    const cart = useCartContext();

    if (cart.items.length === 0){
        return (
            <Container className='d-flex flex-column justify-content-center w-50'>
                <p className='h1 m-3'>Oops! Parece que aún no agregaste productos...</p>
                <p className='h3 m-3'>Podés empezar por acá...</p>
                <Button variant='warning' className='m-3'> 
                    <Link to='/'> Ir a la tienda </Link>
                </Button>
            </Container>
        );
    }

    return (
        <Container className='d-flex flex-column'>
            {/* Listado de productos en le carrito de compras */}
            <CartList products={cart.items} removeProduct={cart.removeProduct} />

            {/* Importe total */}
            <Container className='w-75 m-3 text-end'>
                <p className='h2'>Total: $ {cart.getTotalPrice()}</p>
            </Container>

            {/* Botones */}
            <Container className='d-flex'>
                <Button variant='warning' className='m-3'> 
                    <Link to='/checkout'> Finalizar compra </Link>
                </Button>
                <Button variant='warning' className='m-3'> 
                    <Link to='/'> Volver a la tienda </Link>
                </Button>
                <Button variant='warning' onClick={cart.clearCart} className='m-3'> 
                    Vaciar carrito
                </Button>
            </Container>
        </Container>
    );
}