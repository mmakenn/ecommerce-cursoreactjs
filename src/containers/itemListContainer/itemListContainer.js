import { ItemList } from '../../components/itemList/itemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Loader } from '../../components/loader/loader';

import { db } from '../../firebase';
import { collection, getDocs, query, where } from '@firebase/firestore';

export const ItemListContainer = () => {
  /* Renderiza el catalogo de productos, ya sea en su totalidad
    o según la categoría determinada por la ruta ingresada. */
  const [products, setProducts] = useState(null);
  const {categoryId} = useParams();
  //Se extrae solamente el nombre de la categoría desde la ruta:
  categoryId && categoryId.replace('/category/', '');

  useEffect(() => {
    /* Se levantan los productos desde la base. */
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