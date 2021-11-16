import { Spinner } from "react-bootstrap";

export const Loader = (props) => {
    if (!props.status) return <> </>
    return (
        <>
        <Spinner animation="border" variant="warning" />
        <p>Cargando...</p>
        </>
    );
}