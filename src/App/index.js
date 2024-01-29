import '../App.css';
import { getQuotes } from '../data/data';
import Allquotes from '../Allquotes';
import {getNextQuote} from '../data/data';
import OneQuote from '../OneQuote';

function App() {
  // console.log(getNextQuote(41));
  return (
  <div className="App">
    <h1>
      Mes citations
    </h1>
    <div className="App">
    
    <OneQuote id={41}/>
    {/* <Allquotes quotes={getQuotes()}/> */}

    </div>
  </div>
  );
}

export default App;