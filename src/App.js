import './App.css';
import { Navbar } from './components/navbar/navbar.js'
import { ItemListContainer } from './components/itemListContainer/itemListContainer.js'

function App() {
  /* const alertName = () => alert('Hola') */ /* No hace falta llave porque es  una sola linea y esta inmediatamente despues */
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer greeting='Bienvenidos' />

        { /* <button onClick={alertName}>Click Me</button> */}
      </header>
    </div>
  );
}

export default App;
