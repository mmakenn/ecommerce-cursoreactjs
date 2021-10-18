import './navbar.css';
import { CartWidget } from '../cartWidget/cartWidget';

export const Navbar = () => {
    return (<nav className="App-navbar">
                <div className="App-navbar-brand">
                    <h2>MC Training</h2>
                    <h1>- Entrenamientos Personalizados -</h1>
                </div>
                <ul className="App-navbar-menu">
                    <li><a href="">Clases</a></li>
                    <li><a href="">Planes de entrenamiento</a></li>
                    <li><a href="">Carrito</a><CartWidget/></li>
                </ul>
             </nav>);
}