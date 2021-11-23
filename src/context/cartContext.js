import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ( {children} ) => {
    const [items, setItems] = useState([]);
    const [itemsQuantity, setItemsQuantity] = useState(0);

    const addProduct = (product, quantity) => {
        const foundedProduct = items.find(p => p.id === product.id);
        if (foundedProduct){
            foundedProduct.quantity = quantity; 
        } else {
            product.quantity = quantity;
            setItems([...items, product]);
        }
        setItemsQuantity(quantity);
    }

    const removeProduct = (product) => {
        setItems(items.filter((prodInCart) => {
            return prodInCart.id !== product.id;
        }));

        setItemsQuantity(itemsQuantity - product.quantity);
    }

    const clearCart = () => {
        setItems([]);
        setItemsQuantity(0);
    }

    const getTotalPrice = () => {
        let total = 0;
        items.forEach( item => total = total + item.price * item.quantity );
        return total;
    }

    const checkQuantity = (product) => {
        const foundedProduct = items.find(p => p.id === product.id);
        return (foundedProduct ? foundedProduct.quantity : 1); 
    }

    return (
        <CartContext.Provider value={{ items, itemsQuantity, addProduct, removeProduct, clearCart, getTotalPrice, checkQuantity }}>
            { children }
        </CartContext.Provider>
    );
}