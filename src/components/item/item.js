import { ItemCount } from '../itemCount/itemCount.js'
import { Card, Button } from 'react-bootstrap';

export const Item = (props) => {
    return (
        <Card style={{ width: '18rem' }} className='m-3'>
            <Card.Img variant="top" src={props.imgLink} alt={props.description}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Card.Text>
                $ {props.price}
                </Card.Text>
                <ItemCount/>
                <Button variant='warning' className='m-3'>Lo quiero!</Button>
            </Card.Body>
        </Card>
    );
}