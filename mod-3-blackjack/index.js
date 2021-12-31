let firstCard = 11
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

function start() {
  if (sum < 21) {
    message = "You're in!  Do you want another card?"
  } else if (sum === 21) {
    message = "You got blackjack! :)"
  } else {
    message = "You're out of the game :("
  }

  messageEl.textContent = message
}
