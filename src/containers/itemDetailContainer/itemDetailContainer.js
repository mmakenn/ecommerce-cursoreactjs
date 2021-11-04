import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { ItemDetail } from "../../components/itemDetail/itemDetail";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {itemId} = useParams();

    useEffect(() => {
        /* function fetchSimulator(id) {
            return new Promise(resolve => {
                setTimeout(() => {
                    productsDemo.forEach(element => {
                        if (element.id === id){
                            resolve(element);
                        } 
                    });
                }, 2000);
            });
        }
            
        async function getProduct(id) {
            console.log('calling');
            const result = await fetchSimulator(id);
            setProduct(result);
            console.log('loaded');
        }
        
        getProduct('1'); */

        const getData = () => {
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

    return ( product ? <ItemDetail product={product}/> : null);
}