import './itemListContainer.css';
import { ItemList } from '../../components/itemList/itemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


export const ItemListContainer = (props) => {
  /* Encargado de leer la base de datos, se los pasa a ItemList. setTimeOut = 2 seg */
  const [products, setProducts] = useState(null);
  const {categoryId} = useParams();

  useEffect(() => {
      /* function fetchSimulator() {
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
      
      chargeProducts();    */

    const getData = () => {
      fetch('../data.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then((response) => {
        return response.json();
      }).then((myJson)  => {
        let loadedProducts;
          if (! categoryId) {
            loadedProducts = myJson['planes'].concat(myJson['clases']);
          } else {
            loadedProducts = myJson[categoryId];
          }
          setProducts(loadedProducts);
      });
    }

    getData();

  }, [categoryId]);

  return (products ? <ItemList products={products} /> : <p>Cargando productos...</p>);
}