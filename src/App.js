import './App.css';
import { Navbar } from './components/navbar/navbar.js'
import { ItemListContainer } from './containers/itemListContainer/itemListContainer.js'
import { ItemListContainer2 } from './containers/itemListContainer2/itemListContainer2.js'

function App() {
  /* const alertName = () => alert('Hola') */ /* No hace falta llave porque es  una sola linea y esta inmediatamente despues */
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        { /* <button onClick={alertName}>Click Me</button> */}
      </header>
      <div className="App-content">
        <ItemListContainer2/>
      </div>
    </div>
  );
}

export default App;
