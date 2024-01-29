import React, {useState} from 'react';
import { getNextQuote } from '../data/data';
import Quote from '../Quote';

function OneQuote(props) {
    // la variable d'état
    const [quote, setQuote] = useState(getNextQuote(props.id));
    console.log(quote)
    // si la variable d'état est nulle
    if (!quote) {
        return (
            <>
                Pas de citation !!
            </>
        )
    }
    // la variable d'état est non nulle
    return (
    <div className="App">
        <h3>
            La citation courante
        </h3>
        <div className="App">
            <Quote key = {quote.id} {...quote} />
        </div>
    </div>
    );
}

export default OneQuote;
            