import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

export const PageNotFound = () => {
    /* Renderiza mensaje de error 404 para rutas que no están determinadas en el flow de la app. */
    return (
        <Container className='w-50 d-flex flex-column justify-content-center'>
            <p className='h1 m-3'>
                ERROR 404
            </p>
            <p className='h3 m-3'>
                Página no encontrada 😢
            </p>
            <Button variant='warning' className='m-3'> 
                <Link to='/'> 
                    Ir a la tienda 
                </Link>
            </Button>
        </Container>
    );
}