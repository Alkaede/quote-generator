let apiQuotes = [];
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hide loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// remove the white supremist
function gross(){
    loading();
    if(quote.author === 'Donald Trump'){
        newQuote();      
    }
    complete();
}


//Show New Quote
function newQuote(){
    loading();
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //Check if author is field is blank => replace with 'Unknown'
    if (!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }

    //Check quote length for styling
    if(quote.text.length > 110) {
        quoteText.classList('long-quote')
    }else{
        quoteText.classList.remove('long-quote');   
    }   
    //set quote, hide loader
    quoteText.textContent = quote.text;
    complete();
}


//Get quote from api
async function getQuote(){
    loading();
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);  //not set till response is done fetching, adding the cors url so cors error doesnt happen
        apiQuotes = await response.json();  
        newQuote();
    }catch (error){
        //catch error here
    }
    complete();
}

//Tweet quote
function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On load
getQuote();