import './itemListContainer.css';
import { ItemList } from '../../components/itemList/itemList';
import { useState } from 'react/cjs/react.development';
import planInicial from '../../images/planInicial.jpg';
import planAvanzado from '../../images/planAvanzado.jpg';


export const ItemListContainer = () => {
    /* Encargado de leer la base de datos, se los pasa a ItemList. setTimeOut = 2 seg */
    const productsDemo = [
        { id:'1', title: 'Plan Inicial', description: 'Rutinas de 1 hora full body, para realizar durante todo el mes', price: 2000, imgLink: {planInicial} },
        { id:'2', title: 'Plan Avanzado', description: 'Rutinas de 1 hora personalizada según el objetivo del alumno', price: 3500, imgLink: {planAvanzado} }
    ];

    const [products, setProducts] = useState([])
    
    const loadProducts = new Promise((resolve, reject) => { 
        setTimeout(() => { setProducts(productsDemo) }, 2000 );
        if (products == []){
            reject('No se cargaron los productos');
        } else {
            resolve(productsDemo);
        }
    });

    /* loadProducts.then((result) => { console.log(result);
        return (<div>
            <ItemList products={products} />
        </div> );
    }, (err) => { console.log('Error: ');
        return (<><p>No hay productos disponibles.</p> </>); } ); */

    return (<div>
        <ItemList products={products} />
    </div> );
}