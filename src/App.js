import './App.css';
import { getQuotes } from './data/data';

function App() {
  return (
  <div className="App">
    <h1>
      Mes citations
    </h1>
    <div className="App">
    
    <Allquotes quotes={getQuotes()}/>

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

function Allquotes(props) {
  return(
    <>
      {props.quotes.map((x)=> <Quote key = {x.id} {...x} />)}
    </>
  )
}

export default App;