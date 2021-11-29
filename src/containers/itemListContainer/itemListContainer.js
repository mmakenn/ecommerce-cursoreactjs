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
    let loadedProducts = collection(db, 'products');
    if (categoryId) {
      loadedProducts = query(loadedProducts, 
                            where('category', '==', categoryId)
                            );
    }

    getDocs(loadedProducts)
    .then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => {
                                    return {...doc.data(), id: doc.id}
                                  }));
    })
  }, [categoryId]);

  return (products ? <ItemList products={products} /> : <Loader/>);
}