// Create variables for the game state
let score1 = 0
let score2 = 0
let player1Turn = true

//Create variables for dom nodes (all changing elements)
const message = document.getElementById('message')
const scoreDisplay1 = document.getElementById('player1Scoreboard')
const scoreDisplay2 = document.getElementById('player2Scoreboard')
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')

rollBtn.addEventListener('click', () => {
  const roll = Math.floor(Math.random() * 6) + 1
  
  if (player1Turn) {
    player1Dice.textContent = roll
    score1 += roll
    scoreDisplay1.textContent = score1
    message.textContent = "Player Two's Turn"
    player1Dice.classList.remove('active')
    player2Dice.classList.add('active')
  } else {
    player2Dice.textContent = roll
    score2 += roll
    scoreDisplay2.textContent = score2
    message.textContent = "Player One's Turn"
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
  }
  player1Turn = !player1Turn

  //check for winner
  if (score1 >= 20) {
    message.textContent = "Player One WINS!  WOOT!"
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'block'
  } else if (score2 >= 20) {
    message.textContent = "Player Two WINS!  WOOT!"
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'block'
  }
})
