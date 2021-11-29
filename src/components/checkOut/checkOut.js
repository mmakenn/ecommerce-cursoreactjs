import { useCartContext } from "../../context/cartContext";
import { SendedOrderModal } from "../sendedOrderModal/sendedOrderModal";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

import { db } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";

export const CheckOut = () => {
    /* Renderiza la pantalla de confirmación de compra. */
    const cart = useCartContext();
    const [modalShow, setModalShow] = useState(false);
    /* Variables para guardar los campos del Form. */
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    /* Variable para guardar el id retornado por la base donde se almacena la orden de compra. */
    const [orderId, setOrderId] = useState('');

    const sendForm = (e) => {
        /* Evento de envío del Form. 
            Se genera la orden de compra y se almacena en la base de datos. 
            Se vacía el carrito de compras. */
        e.preventDefault()
        //Se genera la orden de pedido.
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
        cart.clearCart() //Reset del carrito
        
        //Se guarda la orden en la base.
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, purchaseInfo)
        .then(({id}) => {
            setOrderId(id);
            setModalShow(true); //Se muestra el modal con la confirmación del pedido.
        });
    }

    const saveFormInput = (event, saveField) => {
        /* Asigna cada campo del Form ingresado por el usuario en su respectiva variable. */
        saveField(event.target.value);
    }

    return (
        <>
        {/* Formulario donde ingresa los datos el usuario. */}
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

        {/* Modal que muestra la confirmación del pedido. */}
        <SendedOrderModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={orderId}
        />
        </>
    );
}