let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function start() {
  sumEl.textContent = `Sum: ${sum}`
  cardsEl.textContent = `Cards: ${firstCard} and ${secondCard}`

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
