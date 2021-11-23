import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { ItemDetail } from "../../components/itemDetail/itemDetail";
import { Loader } from '../../components/loader/loader'

import { db } from '../../firebase';
import { doc, getDoc } from '@firebase/firestore';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {itemId} = useParams();
    itemId.replace('/item/', '');
    useEffect(() => {
        /* 
        ..:.: VERSION JSON LOCAL :.:..
        const getData = () => {
            console.log('Hago fetch');
            fetch('../data.json', {
                headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            }).then((response) => {
                return response.json();
            }).then((myJson)  => {
                let loadedProducts = myJson['planes'].concat(myJson['clases']);
                setProduct(
                    loadedProducts.find(element => element.id === itemId)
                ); 
            });
        }
    
        getData(); */

        getDoc(doc(db, 'products', itemId))
        .then((snapshot) => {
            if (snapshot.exists()) {
                setProduct(snapshot.data());
            }
        });

    }, [itemId]);

    return ( product ? <ItemDetail product={product}/> : <Loader/>);
}