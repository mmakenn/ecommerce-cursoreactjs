import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/navbar.js'
import { ItemListContainer } from './containers/itemListContainer/itemListContainer.js'
import { ItemDetailContainer } from './containers/itemDetailContainer/itemDetailContainer';
import { Cart } from './components/cart/cart';
import { CartProvider } from './context/cartContext';
import { CheckOut } from './components/checkOut/checkOut';
import { PageNotFound } from './components/pageNotFound/pageNotFound';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
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
            <Route exact path='/carrito'>
              <Cart/>
            </Route>
            <Route exact path='/checkout'>
              <CheckOut />
            </Route>
            <Route>
              <PageNotFound/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
