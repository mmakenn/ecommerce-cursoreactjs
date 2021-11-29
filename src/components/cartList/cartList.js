import { ItemInCart } from "../itemInCart/itemInCart";

export const CartList = (props) => {
    /* Mapea el listado de items del carrito. */
    return (
        props.products.map(item => <ItemInCart key={item.id} 
                                            item={item} 
                                            removeProduct={props.removeProduct}
                                    />
                            )
    );
}