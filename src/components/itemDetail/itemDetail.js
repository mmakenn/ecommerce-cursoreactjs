import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ItemCount } from "../itemCount/itemCount";

export const ItemDetail = (props) => {
    let product = props.product;
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
                <ItemCount/>
                <Button variant='warning' className='m-3'>Lo quiero!</Button>
                <Button variant='warning' className='m-3'><Link to='/'> Volver </Link></Button>
            </Card.Body>
            <Card.Footer className="text-muted">Una vez acreditado el pago, se enviara un mail con un formulario para que te contactemos dentro de las 48 hs.</Card.Footer>
        </Card>
    );  
}