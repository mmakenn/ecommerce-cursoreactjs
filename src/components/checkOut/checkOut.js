import { useCartContext } from "../../context/cartContext";
import { Button, Form, Row, Col } from "react-bootstrap";

import { db } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";

export const CheckOut = () => {
    const cart = useCartContext();

    const sendForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())

        const purchaseInfo = {cart: cart.items,
                            buyer: {name: formDataObj['name'], 
                                    phone: formDataObj['phone'], 
                                    email: formDataObj['email'],
                                    adress: formDataObj['adress'],
                                    city: formDataObj['city'],
                                    state: formDataObj['state'],
                                    zipcode: formDataObj['zipcode']
                                },
                            date: new Date(),
                            total: cart.getTotalPrice()
                            }
        console.log(purchaseInfo);
        cart.clearCart()

        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, purchaseInfo)
        .then(({id}) => console.log(id));

    }

    return (
        <Form onSubmit={sendForm}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control type="text" placeholder="Horacio Pérez" name="name"/>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="a@domain.com" name="email"/>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Tel./Cel.</Form.Label>
                    <Form.Control type="text" placeholder="01155559999" name="phone"/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control placeholder="Av. Santa Fé 562, piso 19, dpto A" name="adress"/>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" name="city"/>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Provincia</Form.Label>
                    <Form.Select name="state">
                        <option>CABA</option>
                        <option>Buenos Aires</option>
                        <option>Córdoba</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Código postal</Form.Label>
                    <Form.Control type="number" name="zipcode"/>
                </Form.Group>
            </Row>

            <Button type='submit' variant='warning' className='m-3'> 
                Enviar
            </Button>
        </Form>
    );
}