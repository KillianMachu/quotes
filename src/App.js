import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="App">
    <h1>
      Mes citations
    </h1>
    <div className="App">
    {quotes.map((x)=> <Quote text={x.text} author={x.author}/>
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
