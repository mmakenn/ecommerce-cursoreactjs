import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SendedOrderModal = (props) => {
    /* Renderiza el modal con el ID de la orden de compra generada y un mensaje para el usuario. */
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ¡Gracias por tu compra!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Tu ticket de orden es el {props.id}</h4>
                <p>
                    Te estaremos contactando dentro de las 48 hs. para comenzar a entrenar.
                    Conservá el número de ticket.
                    Nuestro contacto es entrenamientomc@a.com
                </p>
            </Modal.Body>
            <Modal.Footer>
                {/* Botón de cierre del modal, redirige al HOME */}
                <Button variant='warning' onClick={props.onHide}>
                    <Link to='/'>
                        Cerrar
                    </Link>
                </Button>
            </Modal.Footer>
        </Modal>
    );
}