import {FiSearch} from 'react-icons/fi';
import './style.css';



function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
  
        <input type="text"
           placeholder="Digite seu CEP"
        />
        
        <button className = "buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className= "main">
        <h2>54325021</h2>

        <span> Rua Teste </span>
        <span>Complemento: algum</span>
        <span>Campo Grande</span>
        <span>Vila Rosa</span>
      </main>
    </div>
  );
}

export default App;