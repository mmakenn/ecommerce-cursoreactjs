import './itemListContainer.css';
import { ItemList } from '../../components/itemList/itemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Loader } from '../../components/loader/loader';

import { db } from '../../firebase';
import { collection, getDocs, query, where } from '@firebase/firestore';

export const ItemListContainer = () => {
  const [products, setProducts] = useState(null);
  const {categoryId} = useParams();
  categoryId && categoryId.replace('/category/', '');

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
        let loadedProducts;
          if (! categoryId) {
            loadedProducts = myJson['planes'].concat(myJson['clases']);
          } else {
            loadedProducts = myJson[categoryId];
          }
          setProducts(loadedProducts);
      });
    }

    getData(); */

    let loadedProducts = collection(db, 'products');
    if (categoryId) {
      loadedProducts = query(loadedProducts, where('category', '==', categoryId));
    }

    getDocs(loadedProducts)
    .then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => {return {...doc.data(), id: doc.id}}));
    })
  }, [categoryId]);

  return (products ? <ItemList products={products} /> : <Loader/>);
}