// javascript
const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1

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
  //remove last element of current snake
  const tail = currentSnake.pop()
  //remove styling from last element
  squares[tail].classList.remove('snake')
  //add square in direction we are heading
  currentSnake.unshift(currentSnake[0] + direction)
  //add styling to that square
  squares[currentSnake[0]].classList.add('snake')
}

move()
move()