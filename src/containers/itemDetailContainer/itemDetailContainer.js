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
        getDoc(doc(db, 'products', itemId))
        .then((snapshot) => {
            if (snapshot.exists()) {
                setProduct({...snapshot.data(), id: itemId});
            }
        });

    }, [itemId]);

    return ( product ? <ItemDetail product={product}/> : <Loader/>);
}