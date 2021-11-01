import { useState, useEffect } from 'react';
import { ItemDetail } from "../../components/itemDetail/itemDetail";

export const ItemDetailContainer = () => {
    const productsDemo = [
        { id:'1', title: 'Plan Inicial', description: 'Rutinas de 1 hora full body, para realizar durante todo el mes', largeDescription: 'Seguimiento diario del profesor. Videos ondemand con explicación de los ejercicios.', price: 2000, imgLink: '/images/planInicial.jpg' },
        { id:'2', title: 'Plan Avanzado', description: 'Rutinas de 1 hora personalizada según el objetivo del alumno, para realizar durante todo el mes.', largeDescription: 'Seguimiento diario del profesor. Videos ondemand con explicación de los ejercicios.', price: 3500, imgLink: '/images/planAvanzado.jpg' }
    ];

    const [product, setProduct] = useState(null);

    useEffect(() => {
        function fetchSimulator(id) {
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
        
        getProduct('1');   
    }, []);

    return ( product ?
        <ItemDetail product={product}/> : null
    );
}