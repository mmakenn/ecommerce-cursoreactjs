import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { ItemDetail } from "../../components/itemDetail/itemDetail";
import { Loader } from '../../components/loader/loader'

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

    }, [itemId]);

    return ( product ? <ItemDetail product={product}/> : <Loader/>);
}