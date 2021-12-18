import fetch from 'node-fetch';

async function fetchSWAPIAsync() {
    let url = 'https://swapi.dev/api/people/2/';
    let charName, speciesName = '';
  
    let result = await fetch(url);
    let myJson = await result.json();
    charName = myJson.name;
    let speciesResult = await fetch(myJson.species[0]);
    let speciesJson = await speciesResult.json();
    speciesName = speciesJson.name;
  
    console.log(charName, 'is a', speciesName);
  }

  fetchSWAPIAsync();  
  