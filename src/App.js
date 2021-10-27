import './App.css';
import { Navbar } from './components/navbar/navbar.js'
import { ItemListContainer } from './containers/itemListContainer/itemListContainer.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="App-content">
        <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
