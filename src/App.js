import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/navbar.js'
import { ItemListContainer } from './containers/itemListContainer/itemListContainer.js'
import { ItemDetailContainer } from './containers/itemDetailContainer/itemDetailContainer';
import { Cart } from './components/cart/cart';
import { CartProvider } from './context/cartContext';
import { CheckOut } from './components/checkOut/checkOut';

import { Button, Form, Row, Col } from "react-bootstrap";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
          <div className="App-content">
            <Switch>
              <Route exact path='/'>
                <ItemListContainer/>
              </Route>
              <Route exact path='/category/:categoryId'>
                <ItemListContainer/>
              </Route>
              <Route exact path='/item/:itemId'>
                <ItemDetailContainer/>
              </Route>
              <Route path='/carrito'>
                <Cart/>
              </Route>
            </Switch>
            <Route path='/checkout'>
              <CheckOut />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
