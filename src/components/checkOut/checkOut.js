import { useCartContext } from "../../context/cartContext";
import { SendedOrderModal } from "../sendedOrderModal/sendedOrderModal";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

import { db } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";

export const CheckOut = () => {
    const cart = useCartContext();
    const [modalShow, setModalShow] = useState(false);
    const [orderId, setOrderId] = useState('');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const sendForm = (e) => {
        e.preventDefault()
        const purchaseInfo = {cart: cart.items,
                                buyer: {name: name, 
                                        phone: phone, 
                                        email: email,
                                        adress: adress,
                                        city: city,
                                        state: state,
                                        zipcode: zipcode
                                    },
                                date: new Date(),
                                total: cart.getTotalPrice()
                            }
        cart.clearCart()

        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, purchaseInfo)
        .then(({id}) => {
            setOrderId(id);
            setModalShow(true);
        });
    }

    const saveFormInput = (event, saveField) => {
        saveField(event.target.value);
    }

    return (
        <>
        <Form onSubmit={sendForm}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control type="text" 
                            onChange={(e) => saveFormInput(e, setName)} 
                            placeholder="Horacio Pérez" 
                            name="name"/>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" 
                                onChange={(e) => saveFormInput(e, setEmail)} 
                                placeholder="a@domain.com" 
                                name="email"/>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Tel./Cel.</Form.Label>
                    <Form.Control type="text" 
                                onChange={(e) => saveFormInput(e, setPhone)} 
                                placeholder="01155559999" 
                                name="phone"/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" 
                            onChange={(e) => saveFormInput(e, setAdress)} 
                            placeholder="Av. Santa Fé 562, piso 19, dpto A" 
                            name="adress"/>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" 
                                onChange={(e) => saveFormInput(e, setCity)} 
                                name="city"/>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Provincia</Form.Label>
                    <Form.Select onChange={(e) => saveFormInput(e, setState)} 
                                name="state">
                        <option>Seleccionar..</option>
                        <option>CABA</option>
                        <option>Buenos Aires</option>
                        <option>Córdoba</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Código postal</Form.Label>
                    <Form.Control type="text" 
                                onChange={(e) => saveFormInput(e, setZipcode)} 
                                name="zipcode"/>
                </Form.Group>
            </Row>

            <Button type='submit' 
                    disabled={!(name && email && phone && adress && city && state && zipcode)} 
                    variant='warning' 
                    className='m-3'
            > 
                Enviar
            </Button>
        </Form>

        <SendedOrderModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={orderId}
        />
        </>
    );
}