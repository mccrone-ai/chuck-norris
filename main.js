let baseUrl = "https://api.chucknorris.io/jokes/random?firstName=Murray&lastName=McDonald"
let displayJoke = document.querySelector(".display-facts");

async function getChuckle(){
    const response = await fetch (baseUrl);
    const data = await response.json();
    const joke = data.value;
    displayJoke.innerHTML = joke;
}


