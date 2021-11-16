import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ItemCount } from "../itemCount/itemCount";
import { useCartContext } from "../../context/cartContext";

export const ItemDetail = (props) => {
    let product = props.product;
    const shoppingCart = useCartContext();

    const addToCart = (quantity) => {
        shoppingCart.addProduct(product, quantity);
    }

    return (
        <Card style={{ width: '50rem' }} className='m-auto'>
            <Card.Header className='h2'>{product.title}</Card.Header>
            <Card.Img variant="top" src={product.imgLink} alt={product.description}/>
            <Card.Body>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>
                    {product.largeDescription}
                </Card.Text>
                <Card.Text>
                    $ {product.price}
                </Card.Text>
                <ItemCount stock={5} addToCart={addToCart}/> {/* Por ahora el stock inicial está hardcodeado. 
                Hay que implementar las funciones para almacenar en cache el valor y actualizarlo cuando el 
                usuario agrega items al carrito. */}
                <Button variant='warning' className='m-3'><Link to='/'> Volver </Link></Button>
                <Button variant='warning' className='m-3'><Link to='/carrito'> Ver Carrito </Link></Button>
            </Card.Body>
            <Card.Footer className="text-muted">Una vez acreditado el pago, se enviara un mail con un formulario
             para que te contactemos dentro de las 48 hs.</Card.Footer>
        </Card>
    );  
}