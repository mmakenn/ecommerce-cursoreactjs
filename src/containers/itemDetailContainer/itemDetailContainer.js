import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { ItemDetail } from "../../components/itemDetail/itemDetail";
import { Loader } from '../../components/loader/loader'
import { Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ItemCount } from "../../components/itemCount/itemCount";
import { useCartContext } from "../../context/cartContext";
import { db } from '../../firebase';
import { doc, getDoc } from '@firebase/firestore';

export const ItemDetailContainer = () => {
    /* Renderiza una Card con el detalle de un producto
        Contiene botones para seleccionar la cantidad de unidades,
        para agregar el producto al carrito y para ver el carrito. */
    const [product, setProduct] = useState(null);
    const {itemId} = useParams();
    itemId.replace('/item/', '');
    
    useEffect(() => {
        getDoc(doc(db, 'products', itemId))
        .then((snapshot) => {
            if (snapshot.exists()) {
                setProduct({...snapshot.data(), id: itemId});
            }
        });

    }, [itemId]);

    const shoppingCart = useCartContext();

    const addToCart = (quantity) => {
        /* Agrega el producto y su cantidad al carrito. */
        shoppingCart.addProduct(product, quantity);
    }

    const getInitialCountValue = () =>{
        /* Devuelve la cantidad de unidades del producto que ya fueron agregadas al carrito. */
        return shoppingCart.checkQuantity(product);
    } 

    return ( product ? 
            <Container className='w-75 m-5 d-flex'>
                <ItemDetail product={product}/>
                <div className='w-25 d-flex flex-column justify-content-center'>
                    <ItemCount stock={product.stock} 
                                    initial={getInitialCountValue} 
                                    addToCart={addToCart}/>
                    <Button variant='warning' className='m-3'>
                        <Link to='/'> 
                            Volver 
                        </Link>
                    </Button>
                    <Button variant='warning' className='m-3'>
                        <Link to='/carrito'> 
                            Ver Carrito 
                        </Link>
                    </Button>
                </div>
            </Container>
            : <Loader/>
        );
}