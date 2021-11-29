import { Item } from "../item/item.js";
import { Row } from "react-bootstrap";

export const ItemList = (props) => {
    /* Renderiza la lista de productos del catálogo. */
    return (
        <Row xs={1} md={2} className="g-6">
            { props.products.map(product => 
                <Item  key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imgLink={product.img}
                /> 
            ) } 
        </Row>
    );
}