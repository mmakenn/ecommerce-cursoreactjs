import { useCartContext } from "../../context/cartContext";
import { Button } from "react-bootstrap";

export const CheckOut = () => {
    const cart = useCartContext();

    const sendForm = () => {
        const purchaseInfo = {cart: cart.items,
                            buyer: {name: 'name', phone: 'phone', mail: 'mail'},
                            date: new Date(),
                            total: cart.getTotalPrice()}
        console.log(purchaseInfo);
        cart.clearCart()
    }

    return (
        <Button variant='warning' onClick={sendForm} className='m-3'> 
            Enviar
        </Button>
    );
}