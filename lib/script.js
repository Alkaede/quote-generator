//Get quote from api
async function getQuote(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(proxyUrl + apiUrl);  //not set till response is done fetching, adding the cors url so cors error doesnt happen
        const data = await response.json();  //not set till response is set to json format
        console.log(data);
    }catch (error){
        getQuote();
        console.log('oops we didnt get a quote', error);
    }
}

//On load
getQuote();