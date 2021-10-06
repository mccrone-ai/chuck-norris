let baseUrl = "https://api.icndb.com/jokes/random?firstName=Murray&lastName=McDonald"
let displayJoke = document.querySelector(".display-facts");

async function getChuckle(){
    const response = await fetch (baseUrl);
    const data = await response.json();
    const full_data = data.value
    const full_joke = full_data.joke;
    displayJoke.innerHTML = full_joke;
}


