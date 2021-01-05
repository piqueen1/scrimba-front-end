const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
let squares = []
let score = 0

//28*28 = 784
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty
  
const layout = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
  4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
  1,1,1,1,1,1,0,1,1,4,2,2,2,2,2,2,2,2,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1   
]

//create board
function createBoard() {
  for (let i=0; i<layout.length; i++) {
    const currentLayout = layout[i]
    const square = document.createElement('div')
    grid.appendChild(square)
    squares.push(square)
    
    const currentSquare = squares[i]

    //styling
    if (currentLayout === 0) {
      currentSquare.classList.add('pac-dot')
    } else if (currentLayout === 1) {
      currentSquare.classList.add('wall')
    }  else if (currentLayout === 2) {
      currentSquare.classList.add('ghost-lair')
    } else if (currentLayout === 3) {
      currentSquare.classList.add('power-pellet')
    }
  }
}
createBoard()

//starting position of pacman
let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].classList.add('pacman')

function control(e) {
  squares[pacmanCurrentIndex].classList.remove('pacman')
  switch (e.keyCode) {
    case 40:
      if (
        !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
        !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
        pacmanCurrentIndex + width < width * width
        ) pacmanCurrentIndex += width
      break
    case 38:
      if (
        !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') &&
        !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
        pacmanCurrentIndex - width >= 0
        ) pacmanCurrentIndex -= width
      break
    case 37:
      if (
        !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair') &&
        !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
        pacmanCurrentIndex % width !== 0
        ) pacmanCurrentIndex -= 1
        if (pacmanCurrentIndex === 364) {
          pacmanCurrentIndex = 391
        }
      break
    case 39:
      if (
        !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair') &&
        !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
        pacmanCurrentIndex % width < width - 1
        ) pacmanCurrentIndex += 1
        if (pacmanCurrentIndex === 391) {
          pacmanCurrentIndex = 364
        }
      break
  }
  squares[pacmanCurrentIndex].classList.add('pacman')
  pacDotEaten()
  powerPelletEaten()
  checkForGameover()
  checkForWin()
}

document.addEventListener('keyup',control)

function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
    score++
    scoreDisplay.textContent = ''+ score
    squares[pacmanCurrentIndex].classList.remove('pac-dot')
  }
}

function powerPelletEaten() {
  //if square pacman is in contains a power pellet
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
    //remove power-pellet from square
    squares[pacmanCurrentIndex].classList.remove('power-pellet')
    
    //add a score of 10
    score += 10
    //change each ghost to isScared true
    ghosts.forEach(ghost => ghost.isScared = true)
    //use setTimeout to unscare ghosts after 10 seconds
    setTimeout(unScareGhosts, 10000)
  }

  function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false, 10000)
  }

}

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className
    this.startIndex = startIndex
    this.speed = speed
    this.currentIndex = startIndex
    this.isScared = false
    this.timerId = NaN
  }
}

const ghosts = [
  new Ghost('Blinky', 348, 250),
  new Ghost('Pinky', 376, 400),
  new Ghost('Inky', 351, 300),
  new Ghost('Clyde', 379, 500)
]

//draw my ghosts onto my grid
ghosts.forEach(ghost => {
  squares[ghost.currentIndex].classList.add(ghost.className)
  squares[ghost.currentIndex].classList.add('ghost')
})


//move the ghosts
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
  console.log('ghost moved')
  const directions = [-1,+1,-width,+width]
  let direction = directions[Math.floor(Math.random() * directions.length)]
  console.log(direction)

  ghost.timerId = setInterval(function() {
    //If next square does not contain a wall or ghost, execute code
    if (!squares[ghost.currentIndex + direction].classList.contains('wall' || 'ghost')) {
    
      //remove current ghost
      squares[ghost.currentIndex].classList.remove(ghost.className)
      squares[ghost.currentIndex].classList.remove('ghost')
      squares[ghost.currentIndex].classList.remove('scaredGhost')
      //add direction to current index
      ghost.currentIndex += direction
      //add ghost class
      squares[ghost.currentIndex].classList.add(ghost.className)
      squares[ghost.currentIndex].classList.add('ghost')
    } else direction = directions[Math.floor(Math.random() * directions.length)]
  
    //if gost is scared
    if (ghost.isScared) {
      console.log('ghost is scared')
      squares[ghost.currentIndex].classList.add('scaredGhost')
    }

    //if the ghost is scared AND pacman is on it
    if (
      ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
        //remove classnames -- ghost.classname, 'ghost', 'scaredGhost'
        squares[ghost.currentIndex].classList.remove(ghost.className)
        squares[ghost.currentIndex].classList.remove('ghost')
        squares[ghost.currentIndex].classList.remove('scaredGhost')
        //change ghosts currentIndex back to its startIndex
        ghost.currentIndex = ghost.startIndex
        //add a score of 100
        score += 100
        //add ghost.classname and 'ghost' to the new position
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
      }
  }, ghost.speed)
  checkForGameover()
}

//check for game over
function checkForGameover() {
  //if pacman's square contains a ghost and NOT a scared ghost
  if (
    squares[pacmanCurrentIndex].classList.contains('ghost') &&
    !squares[pacmanCurrentIndex].classList.contains('scaredGhost')
  ) {
    //stop each ghost from moving, clear interval with ID
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    //remove eventlistener from our control function
    document.removeEventListener('keyup',control)
    //tell user the game is over
    alert('The ghost gotcha!  Game over!')
  }
 }

 function checkForWin() {
   if (score >= 274) {
     //stop each ghost
     ghosts.forEach(ghost => clearInterval(ghost.timerId))
     //remove the event listener
     document.removeEventListener('keyup',control)
     //tell user they won
     alert('You won!  Great job!')
    }
 }