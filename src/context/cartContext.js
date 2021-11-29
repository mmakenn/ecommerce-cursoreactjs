import { createContext, useContext, useState } from "react";

const CartContext = createContext();

/* Para utilizar el carrito dentro de otro componente se invoca 'useCartContext()': */
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ( {children} ) => {
    const [items, setItems] = useState([]); //Guarda la lista de productos.
    const [itemsQuantity, setItemsQuantity] = useState(0); //Controla la cantidad de productos en el carrito.

    const addProduct = (product, quantity) => {
        /* Agrega un producto al carrito y su cantidad. */
        let modifyQuantity = 0; //Controla la cantidad de unidades reales que se agregan o eliminan.
        //Primero se busca si ya está el producto en el carrito:
        const foundedProduct = items.find(p => p.id === product.id);
        if(foundedProduct){
            //Esas unidades se restarían del carrito:
            modifyQuantity = modifyQuantity - foundedProduct.quantity;
        }
        //Se crea un nuevo array, donde se elimina el producto si es que ya existe en el carrito:
        const newItems = items.filter((prodInCart) => {
            return prodInCart.id !== product.id;
        });
        //Se suma al contador la cantidad de unidades que se pretenden agregar:
        modifyQuantity = modifyQuantity + quantity;
        setItemsQuantity(itemsQuantity + modifyQuantity);
        //Se guarda el nuevo array, con el producto agregado:
        setItems([...newItems, {...product, quantity: quantity}]);
    }

    const removeProduct = (product) => {
        /* Elimina todas las unidades de un producto del carrito. */
        setItems(items.filter((prodInCart) => {
            return prodInCart.id !== product.id;
        }));

        setItemsQuantity(itemsQuantity - product.quantity);
    }

    const clearCart = () => {
        /* Se resetea el carrito, eliminando todo su contenido. */
        setItems([]);
        setItemsQuantity(0);
    }

    const getTotalPrice = () => {
        /* Devuelve el precio de la sumatoria de todos los productos del carrito. */
        let total = 0;
        items.forEach( item => total = total + item.price * item.quantity );
        return total;
    }

    const checkQuantity = (product) => {
        /* Devuelve las unidades de un producto existentes en el carrito. */
        const foundedProduct = items.find(p => p.id === product.id);
        return (foundedProduct ? foundedProduct.quantity : 1); 
    }

    return (
        <CartContext.Provider value={{ items, 
                                        itemsQuantity, 
                                        addProduct, 
                                        removeProduct, 
                                        clearCart, 
                                        getTotalPrice, 
                                        checkQuantity 
                                    }}>
            { children }
        </CartContext.Provider>
    );
}