import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="App">
    <h1>
      Mes citations
    </h1>
    <div className="App">
      <Quote text="Elementary, my dear Watson" author="Sherlock Holmes"/>
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
