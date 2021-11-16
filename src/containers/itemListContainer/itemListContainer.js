import './itemListContainer.css';
import { ItemList } from '../../components/itemList/itemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Loader } from '../../components/loader/loader'

export const ItemListContainer = () => {
  const [products, setProducts] = useState(null);
  const {categoryId} = useParams();

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

  return (products ? <ItemList products={products} /> : <Loader/>);
}