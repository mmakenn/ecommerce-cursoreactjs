import { Container, Spinner } from "react-bootstrap";

export const Loader = () => {
    /* Renderiza un loader para el tiempo de espera del servidor. */
    return (
        <Container className="w-100 mt-5 d-flex flex-column justify-content-center align-items-center">
            <Spinner animation="border" variant="warning" />
            <p>Cargando...</p>
        </Container>
    );
}