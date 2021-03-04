// variables
const urlBase = "https://api.punkapi.com/v2/beers"

async function getBeers() {
  const promise = await fetch(urlBase)
  const json = await promise.json()

  const currentHtml = document.querySelector('.beer')

  console.log(currentHtml)

  for (let i=0; i<json.length; i++) {
    // go through and append each beer.name to currentHTML
    currentHtml.innterHtml += `
    <p>${json[i].name}</p>
    `
  }
}



getBeers()