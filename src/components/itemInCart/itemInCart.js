import { Card, Button, Container } from "react-bootstrap";

export const ItemInCart = (props) => {
    let item = props.item;
    let totalItemPrice = item.price * item.quantity;
    
    return (
        <Card border='warning' className='w-75 m-3 d-flex'>
            <Card.Body className='d-flex'>
                <Container className='left'>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    $ {item.price} x {item.quantity}
                    </Card.Text>
                </Container>
                <Container className='right'>
                    <Card.Text className='h4'>Total: $ {totalItemPrice}</Card.Text>
                    <Button variant='warning' className='m-3' onClick={() => props.removeProduct(item)}>
                        Eliminar
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    );
}