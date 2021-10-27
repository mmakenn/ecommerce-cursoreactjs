import { Item } from "../item/item.js";

export const ItemList = (props) => {
    /* Renderiza una lista de productos de la forma Item */
    if (props.products){
        console.log('Entro []')
        return (
            <>
            { props.products.map(product => <Item  key={product.id}
                                            title={product.title}
                                            description={product.description}
                                            price={product.price}
                                            imgLink={product.imgLink}
                                            />
                                ) 
            } 
            </>
        );
    } else {
        return (
            <>
            <p>Cargando productos...</p>
            </>
        );
    }
}