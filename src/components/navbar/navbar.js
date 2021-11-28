import { Link } from 'react-router-dom';
import './navbar.css';
import { CartWidget } from '../cartWidget/cartWidget.js';
import { useEffect, useState } from 'react';

import { db } from '../../firebase';
import { collection, getDocs } from '@firebase/firestore';

export const Navbar = () => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        const loadedCategories = collection(db, 'navbar');
        getDocs(loadedCategories)
        .then((snapshot) => {
        setCategories(snapshot.docs.map((doc) => {return {...doc.data(), id: doc.id}}));
        })
    }, []);

    return (
        <nav className="App-navbar">
            <div className="App-navbar-brand">
                <h2>MC Training</h2>
                <h1>- Entrenamientos Personalizados -</h1>
            </div>
            <ul className="App-navbar-menu">
                <li><Link to={`/`}> Home </Link></li>
                { categories && categories.map(category => 
                                        <li key={category.id}>
                                            <Link to={`/category/${category.name}`}>
                                                {category.name}
                                            </Link>
                                        </li>
                ) }
                <li><Link to={`/carrito`}> Carrito <CartWidget/></Link></li>
            </ul>
        </nav>
    );
}