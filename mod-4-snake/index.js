// javascript
const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const scoreDisplay = document.getElementById('score')
const width = 10
let squares = []
let currentSnake = [2,1,0]
let direction = 1
let appleIndex = 0
let score = 0
let intervalTime = 1000
let speed = 0.9

function createGrid() {
  for (let i = 0; i<100; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    grid.appendChild(square)
    squares.push(square)
  }
}

createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

function move() {
  if (
    (currentSnake[0] % width === 0 && direction === -1) ||
    (currentSnake[0] % width === width - 1 && direction === 1) ||
    (currentSnake[0] + width >= width*width && direction === width) ||
    (currentSnake[0] % width < 0 && direction === -width) ||
    squares[currentSnake[0] + direction].classList.contains('snake')
    ) 
    return clearInterval(timerId)
    
    //remove last element of current snake
    const tail = currentSnake.pop()
    //remove styling from last element
    squares[tail].classList.remove('snake')
    //add square in direction we are heading
    currentSnake.unshift(currentSnake[0] + direction)
    //add styling to that square
    //deal with snake head getting the apple
    if (squares[currentSnake[0]].classList.contains('apple')) {
      //remove class of apple
      squares[currentSnake[0]].classList.remove('apple')
      //grow snake by adding class of snake to it
      squares[currentSnake[0]].classList.add('snake')
      squares[tail].classList.add('snake')
      //grow our snake array
      currentSnake.push(tail)
      //generate a new apple
      generateApple()
      //add one to the score
      score++
      //display our score
      scoreDisplay.textContent = score
      //speed up our snake
      clearInterval(timerId)
      console.log(intervalTime)
      intervalTime = intervalTime * speed
      console.log(intervalTime)
      timerId = setInterval(move, intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake')
  }
  
  let timerId = setInterval(move,intervalTime)
  move()
  
  function generateApple() {
    do {
      //generate a random number
      appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
  }

generateApple()
//keycodes
// 37 is left arrow
// 38 is up arrow
// 39 is right arrow
// 40 is down arrow

function control(e) {
  if (e.keyCode === 37) {
    console.log('left pressed')
    direction = -1
  } else if (e.keyCode === 38) {
    console.log('up pressed')
    direction = -width
  } else if (e.keyCode === 39) {
    console.log('right pressed')
    direction = 1
  } else if (e.keyCode === 40) {
    console.log('down pressed')
    direction = width
  }
}

document.addEventListener('keydown',control)