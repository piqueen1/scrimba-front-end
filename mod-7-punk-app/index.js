// variables
const urlBase = "https://api.punkapi.com/v2/beers"

async function getBeers() {
  const promise = await fetch(urlBase)
  const beers = await promise.json()

  // render data
  const beersDiv = document.querySelector('.beers')  
  
  let beerHtml = ""

  beers.forEach(beer => {
    beerHtml += `
    <h3>${beer.name}</h3>
    `
  })

  beersDiv.innerHTML = beerHtml
}



getBeers()