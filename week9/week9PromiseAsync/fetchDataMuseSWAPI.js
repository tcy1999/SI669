import fetch from 'node-fetch';

function fetchDataMusePromise1() {
  let url = 'https://api.datamuse.com/words?rel_rhy=forgetful';
  let thePromise = fetch(url);
  thePromise.then((result) => { 
    console.log(result); // try to do something with the data
  });
}

function fetchDataMusePromise2() {
    let url = 'https://api.datamuse.com/words?rel_rhy=forgetful'
    fetch(url)
      .then(result => result.json())
      .then(res => console.log(res));
  }

async function fetchDataMuseAsync () {
    let url = 'https://api.datamuse.com/words?rel_rhy=forgetful';
    let result = await fetch(url);
    let myJson = await result.json();
    console.log(myJson);
  }
  
// fetchDataMusePromise1();
// fetchDataMusePromise2();
fetchDataMuseAsync();
