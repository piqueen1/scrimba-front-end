// Create variables for the game state
let score1 = 0
let score2 = 0
let player1turn = true

//Create variables for dom nodes (all changing elements)
const message = document.getElementById('message')
const scoreDisplay1 = document.getElementById('player1Scoreboard')
const scoreDisplay2 = document.getElementById('player2Scoreboard')
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')