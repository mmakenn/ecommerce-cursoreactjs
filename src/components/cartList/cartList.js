import { ItemInCart } from "../itemInCart/itemInCart";

export const CartList = (props) => {

    return (
        props.products.map(item => <ItemInCart key={item.id} 
                                            item={item} 
                                            removeProduct={props.removeProduct}
                                    />
                        )
    );
}