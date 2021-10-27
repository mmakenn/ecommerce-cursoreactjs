import './itemListContainer.css';
import { ItemList } from '../../components/itemList/itemList';
import { useState, useEffect } from 'react';


export const ItemListContainer = () => {
    /* Encargado de leer la base de datos, se los pasa a ItemList. setTimeOut = 2 seg */
    const productsDemo = [
        { id:'1', title: 'Plan Inicial', description: 'Rutinas de 1 hora full body, para realizar durante todo el mes', price: 2000, imgLink: '/images/planInicial.jpg' },
        { id:'2', title: 'Plan Avanzado', description: 'Rutinas de 1 hora personalizada según el objetivo del alumno', price: 3500, imgLink: '/images/planAvanzado.jpg' }
    ];

    const [products, setProducts] = useState(null);

    function fetchSimulator() {
        return new Promise(resolve => {
            setTimeout(() => {
            resolve(productsDemo);
            }, 2000);
        });
    }
        
    async function chargeProducts() {
        console.log('calling');
        const result = await fetchSimulator();
        setProducts(result);
        console.log('loaded');
    }

    useEffect(() => {
        chargeProducts();   
    }, []);

    return (<div>
                <ItemList products={products} />
            </div> 
    );
}