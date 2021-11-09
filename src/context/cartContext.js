import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState([]);

    const isInCart = (product) => {
        const foundedProduct = cart.find(p => p.id === product.id);
        return foundedProduct !== undefined;
    }

    const addProduct = (product, quantity) => {
        const foundedProduct = cart.find(p => p.id === product.id);
        if (foundedProduct){
            foundedProduct.quantity = foundedProduct.quantity + quantity; 
        } else {
            product.quantity = quantity;
            setCart([...cart, product]);
        }
    }

    const removeProduct = (product) => {
        /* for (var i = 0; i < cart.length; i++){
            if (cart[i].id === product.id) { 
                cart.splice(i, 1); 
            }
        } */

        setCart(cart.filter((prodInCart) => {
            return prodInCart.id !== product.id;
        }));
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, setCart, isInCart, addProduct, removeProduct, clearCart }}>
            { children }
        </CartContext.Provider>
    );
}