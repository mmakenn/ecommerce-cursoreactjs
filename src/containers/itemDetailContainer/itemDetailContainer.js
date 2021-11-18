import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { ItemDetail } from "../../components/itemDetail/itemDetail";
import { Loader } from '../../components/loader/loader'

import { db } from '../../firebase';
import { doc, getDoc } from '@firebase/firestore';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {itemId} = useParams();

    useEffect(() => {
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
    
        getData();

        /* const docRef = doc(db, 'products', 'EpzUXPcF4A6cnSrj7u5x');
        console.log(docRef);
        const docsDB = getDoc(docRef);
        console.log(docsDB); */

        /* getDoc(doc(db, 'products', itemId))
        .then((snapshot) => {
            if (snapshot.exists()) {
            setProduct(snapshot.data());
            }
        }); */

    }, [itemId]);

    return ( product ? <ItemDetail product={product}/> : <Loader/>);
}