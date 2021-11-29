import { Card } from "react-bootstrap";

export const ItemDetail = (props) => {
    /* Renderiza el detalle de un producto. */
    let product = props.product;

    return (
        <Card>
            <Card.Header>
                <Card.Text className='h2'>
                    {product.title}
                </Card.Text>
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
            </Card.Body>
            <Card.Footer className="text-muted">
                Una vez acreditado el pago, te contactemos dentro de las 48 hs.
            </Card.Footer>
        </Card>
    );  
}