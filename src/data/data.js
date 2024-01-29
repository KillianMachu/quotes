const quotes = [{
    id: 14, text: "Elementary, my dear Watson",
    author: "Sherlock Holmes"
},
{
    id: 56, text: "I think therefore I am",
    author: "Rene Descartes"
},
{
    id: 3, text: "Big Brother is watching you",
    author: "George Orwell"
},
{
    id: 41, text: "You talkin' to me?",
    author: "Travis Bickle"
}
];


function getQuotes() {
    return quotes
}


export {getQuotes}

function getNextQuote(id){
    let quote = getQuotes().filter(x=>x.id>id)
    quote.sort((a, b) => a.id - b.id)
    return quote.at(0)
}

export {getNextQuote}