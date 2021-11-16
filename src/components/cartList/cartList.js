import { Card, Button, Container } from "react-bootstrap";

export const CartList = (props) => {
    
    const itemInCart = (item) => {
        let totalItemPrice = item.price * item.quantity;

        return (
            <Card key={item.id} border='warning' className='w-75 m-3 d-flex'>
                <Card.Body className='d-flex'>
                    <Container className='left'>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                        $ {item.price} x {item.quantity}
                        </Card.Text>
                    </Container>
                    <Container className='right'>
                        <Card.Text className='h4'>Total: $ {totalItemPrice}</Card.Text>
                        <Button variant='warning' className='m-3' onClick={ () => props.removeProduct(item) }>
                            Eliminar
                        </Button>
                    </Container>
                </Card.Body>
            </Card>
        );
    }

    return (
        props.products.map(item => itemInCart(item))
    );
}