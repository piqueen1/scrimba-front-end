let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function start() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
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
  let card = getRandomCard()
  sum = sum + card
  cards.push(card)
  console.log(cards)
  renderGame()
}

function getRandomCard() {
  let value = Math.floor(Math.random() * 13) + 1
  if (value === 1) {
    return 11
  } else if (value >= 11) {
    return 10
  } else {
    return value
  }
}