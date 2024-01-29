import './App.css';
import { getQuotes } from './data/data';

function App() {
  return (
  <div className="App">
    <h1>
      Mes citations
    </h1>
    <div className="App">
    
    {getQuotes().map((x)=> <Quote key = {x.id} {...x} />
 )}
    </div>
  </div>
  );
}

function Quote(props) {

  return (
    <>
      <div>
        Texte : {props.text}
      </div>
      <div>
        Auteur : {props.author}
      </div>
    </>);
    }

export default App;
