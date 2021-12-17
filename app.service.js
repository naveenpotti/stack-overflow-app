import {FormatApiresult} from './app.util';
export function GetApiResults(url, method){
    const options  = {
        method,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
   return fetch(url, options)
    .then(response => response.json())
    .then(response => FormatApiresult(response.items))
    .catch(ex => console.error('api call failed!!!', ex))
}

export function GetResults (searchkeyword) {
    const url = `https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=${encodeURIComponent(searchkeyword)}&site=stackoverflow`;
    return GetApiResults(url, 'GET');
}