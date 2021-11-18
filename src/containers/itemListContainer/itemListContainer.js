import './itemListContainer.css';
import { ItemList } from '../../components/itemList/itemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Loader } from '../../components/loader/loader';

import { db } from '../../firebase';
import { collection, doc, getDocs } from '@firebase/firestore';

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

    /* const docRef = collection(db, 'products');
    console.log(docRef);
    const docsDB = getDocs(docRef);
    console.log(docsDB); */

    /* getDocs(collection(db, 'products'))
    .then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => doc.data()));
    }); */

  }, [categoryId]);

  return (products ? <ItemList products={products} /> : <Loader/>);
}