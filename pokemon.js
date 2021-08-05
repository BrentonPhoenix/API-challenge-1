const pokeAPI = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const columnTwo = document.querySelectorAll('.column2');
const columnThree = document.querySelectorAll('.column3');
function fetchResults(){
  fetch(pokeAPI)
    .then(response => response.json())
    .then(function(json){
      //console.log(json);
      variableFunction(json);
    })
  //maybe find a way to pass the function in here??? like challenge 4 but will the event listener still work ??
  //.then(insertTextOfJson()) runs automatically .then(pokeButton.addEventListener('click", insertTextOfJson))
  }

let pokeButton = document.getElementById('activateRandomizer')

pokeButton.addEventListener('click', fetchResults)
//                                     error was () on the fetchResults function


function variableFunction(json){
  console.log(json)
  let a = json  //console.log(a) gives us our json so this IS set correctly, why is this running on it's own?
  
  if(document.getElementById("pokemonNumberRw1").innerText  === '?'){
    let pokeRandom = Math.floor(Math.random(0) * 151);
    //fetch(pokeAPI)
    //.then(response => response.json())
    //.then(data => console.log(data.response[pokeRandom]))
    document.getElementById("pokemonNumberRw1").innerText = pokeRandom + 1
    document.getElementById("pokemonNameRw1").innerText = a.results[pokeRandom].name
  } else if(document.getElementById("pokemonNumberRw2").innerText == "?"){
    let pokeRandom = Math.floor(Math.random(0) * 151);
    //fetch(pokeAPI)
    //.then(response => response.json())
    //.then(data => data.response[pokeRandom])
    document.getElementById("pokemonNumberRw2").innerText = pokeRandom + 1
    document.getElementById("pokemonNameRw2").innerText = a.results[pokeRandom].name ;
  }else if(document.getElementById("pokemonNumberRw3").innerText == "?"){
    let pokeRandom = Math.floor(Math.random(0) * 151);
    //fetch(pokeAPI)
    //.then(response => response.json())
    //.then(data => console.log(data.response[pokeRandom]))
    document.getElementById("pokemonNumberRw3").innerText = pokeRandom + 1
    document.getElementById("pokemonNameRw3").innerText = a.results[pokeRandom].name
  }else if(document.getElementById("pokemonNumberRw4").innerText == "?"){
    let pokeRandom = Math.floor(Math.random(0) * 151);
    //fetch(pokeAPI)
    //.then(response => response.json())
    //.then(data => console.log(data.response[pokeRandom]))
    document.getElementById("pokemonNumberRw4").innerText = pokeRandom + 1
    document.getElementById("pokemonNameRw4").innerText =  a.results[pokeRandom].name
  }else if(document.getElementById("pokemonNumberRw5").innerText == "?"){
    let pokeRandom = Math.floor(Math.random(0) * 151);
    //fetch(pokeAPI)
    //.then(response => response.json())
    //.then(data => console.log(data.response[pokeRandom]))
    document.getElementById("pokemonNumberRw5").innerText = pokeRandom + 1
    document.getElementById("pokemonNameRw5").innerText = a.results[pokeRandom].name
  }else if(document.getElementById("pokemonNumberRw6").innerText == "?"){
    let pokeRandom = Math.floor(Math.random(0) * 151);
    //fetch(pokeAPI)
    //.then(response => response.json())
    //.then(data => console.log(data.response[pokeRandom]))
    document.getElementById("pokemonNumberRw6").innerText = pokeRandom+ 1
    document.getElementById("pokemonNameRw6").innerText = a.results[pokeRandom].name
  } else {
    console.log('WHYYYYYYYY////')
  }}



//
//fetch('https://pokeapi.co/api/v2/pokemon')
//  .then(response => response.json())
//  .then(data => console.log(data))
//function api(URL){
//  fetch(URL) //starting the fetch, passing in url
//  .then(function (result) { //.then promise set result parameter which is the result of the fetch call
//      console.log(result)
//      return result.json(); //returning the JSONified result 
//  })
//  .then(function (json) { // the JSONified result becomes json and send that as a parameter in a new function
//      console.log(json);
//      displayResults(json); //hoisting displayResults and passing in the json results as the parameter
//  })
//}
//
//api('https://pokeapi.co/api/v2/pokemon')