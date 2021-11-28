import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ItemCount } from "../itemCount/itemCount";
import { useCartContext } from "../../context/cartContext";

export const ItemDetail = (props) => {
    let product = props.product;
    const shoppingCart = useCartContext();

    const addToCart = (quantity) => {
        shoppingCart.addProduct(product, quantity);
    }

    const getInitialCountValue = () =>{
        return shoppingCart.checkQuantity(product);
    } 

    return (
        <Card className='w-75 m-5'>
            <Card.Header>
                <Card.Text className='h2'>{product.title}</Card.Text>
            </Card.Header>
            <Card.Body>
                <Card.Img src={product.img} className='w-50 m-3' alt={product.description}/>
                <Card.Text className='h4'>
                    {product.description}
                </Card.Text>
                <Card.Text className='h5'>
                    {product.largeDescription}
                </Card.Text>
                <Card.Text className='h4'>
                    $ {product.price}
                </Card.Text>
                <Card.Text className="text-muted">
                    Stock disponible: {product.stock}
                </Card.Text>
                <ItemCount stock={product.stock} initial={getInitialCountValue} addToCart={addToCart}/>
                <Button variant='warning' className='m-3'><Link to='/'> Volver </Link></Button>
                <Button variant='warning' className='m-3'><Link to='/carrito'> Ver Carrito </Link></Button>
            </Card.Body>
            <Card.Footer className="text-muted">
                Una vez acreditado el pago, te contactemos dentro de las 48 hs.
            </Card.Footer>
        </Card>
    );  
}