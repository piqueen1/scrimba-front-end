// variables
const urlBase = "https://api.punkapi.com/v2/beers"

async function getBeers() {
  const promise = await fetch(urlBase)
  const json = await promise.json()

  console.log(json)
}

getBeers()