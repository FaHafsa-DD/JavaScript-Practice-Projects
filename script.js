const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiUrl = "https://api.quotable.io/random";
async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quoteEl.innerText = data.content;
    authorEl.innerText = data.author;

}
getQuote(apiUrl);
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quoteEl.innerText + "--By " + authorEl.innerText, "Tweet window", "width=600, height=300");
}