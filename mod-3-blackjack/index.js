let firstCard = 11
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"
if (sum < 21) {
  message = "Do you want another card?"
} else if (sum === 21) {
  message = "You got blackjack!"
} else {
  message = "You're out of the game 😭"
}

console.log(message)
