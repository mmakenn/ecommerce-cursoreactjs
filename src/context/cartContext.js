import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ( {children} ) => {
    const [items, setItems] = useState([]);

    const addProduct = (product, quantity) => {
        const foundedProduct = items.find(p => p.id === product.id);
        if (foundedProduct){
            foundedProduct.quantity = foundedProduct.quantity + quantity; 
        } else {
            product.quantity = quantity;
            setItems([...items, product]);
        }
    }

    const removeProduct = (product) => {
        setItems(items.filter((prodInCart) => {
            return prodInCart.id !== product.id;
        }));
    }

    const clearCart = () => {
        setItems([]);
    }

    const getTotalPrice = () => {
        let total = 0
        items.forEach( item => total = total + item.price * item.quantity );
        return total;
    }

    const getTotalQuantity = () => {
        let total = 0
        items.forEach( item => total = total + item.quantity );
        return total;
    }

    return (
        <CartContext.Provider value={{ items, addProduct, removeProduct, clearCart, getTotalPrice, getTotalQuantity }}>
            { children }
        </CartContext.Provider>
    );
}