let firstCard = 9
let secondCard = 5
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function start() {
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  sumEl.textContent = `Sum: ${sum}`
  cardsEl.textContent = "Cards: "
  for (card in cards) {
    cardsEl.textContent += cards[card] + " "
  }

  if (sum < 21) {
    message = "You're in!  Do you want another card?"
  } else if (sum === 21) {
    message = "You got blackjack! :)"
    hasBlackJack = true
  } else {
    message = "You're out of the game :("
    isAlive = false
  }

  messageEl.textContent = message
}

function newCard() {
  let card = 6
  sum = sum + card
  cards.push(card)
  console.log(cards)
  renderGame()
}
