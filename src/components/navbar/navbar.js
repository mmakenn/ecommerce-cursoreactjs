import { Link } from 'react-router-dom';
import './navbar.css';
import { CartWidget } from '../cartWidget/cartWidget.js';

export const Navbar = () => {
    return (
        <nav className="App-navbar">
            <div className="App-navbar-brand">
                <h2>MC Training</h2>
                <h1>- Entrenamientos Personalizados -</h1>
            </div>
            <ul className="App-navbar-menu">
                <li><Link to={`/`}> Home </Link></li>
                <li><Link to={`/category/clases`}> Clases </Link></li>
                <li><Link to={`/category/planes`}> Planes de entrenamiento </Link> </li>
                <li><Link to={`/carrito`}> Carrito <CartWidget/></Link></li>
            </ul>
        </nav>
    );
}