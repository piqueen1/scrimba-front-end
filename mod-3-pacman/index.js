//loops and arrays part 3

//Challenge: Build a pac-man board. A pacman board is a board 18 x 18 squares large that has squares 
//coloured based on if there is a wall in the square, a power-pellet in the square, a pac-dot in the
//square, pac-man himself, or the four ghosts, inky, blinky, pinky and clyde. Based on the game //board example, and what you have learned about if statements and adding classes in javascript, I //would like you to create your own pac-man board. Be as creative with the maze as you like.

//I have gone ahead an added 324 squares for you in the html and made an array for you to work //with.

//please dont forget to share your code on the #share-your--code channel on discord.

const squares = Array.from(document.querySelectorAll('.grid div'))

const layout = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,1,
  1,2,1,1,1,1,2,1,2,1,2,1,1,1,1,1,2,1,
  1,2,1,1,1,1,2,1,2,1,2,1,1,1,1,1,2,1,
  1,2,2,2,2,2,2,1,2,1,2,2,2,2,2,2,2,1,
  1,2,1,1,1,1,2,1,2,1,2,1,1,1,1,1,2,1,
  1,2,1,2,2,2,2,2,2,2,2,1,2,2,2,1,2,1,
  1,2,2,2,1,2,1,1,2,1,1,1,2,1,2,2,2,1,
  1,1,1,2,1,2,1,4,2,2,1,1,2,1,2,1,1,1,
  1,2,2,2,1,2,1,2,2,2,1,2,2,1,2,2,2,1,
  1,2,1,1,1,2,1,5,2,6,1,2,1,1,1,1,2,1,
  1,2,2,2,1,2,1,1,2,1,1,2,1,1,2,2,2,1,
  1,2,1,1,2,2,2,2,7,2,2,2,2,2,1,1,2,1,
  1,2,2,2,2,1,2,1,2,1,2,1,2,2,2,2,2,1,
  1,2,1,1,1,1,2,1,2,1,2,1,1,1,1,1,2,1,
  1,3,2,2,1,2,2,1,2,1,2,2,2,1,2,2,3,1,
  1,1,1,2,2,2,1,1,1,1,1,2,2,2,2,1,1,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

for (let i = 0; i<layout.length; i++) {
  const currentLayout = layout[i]
  const currentSquare = squares[i]
  if (currentLayout === 1) currentSquare.classList.add('wall')
  if (currentLayout === 2) currentSquare.classList.add('pacdot')
  if (currentLayout === 3) currentSquare.classList.add('powerpellet')
  if (currentLayout === 4) currentSquare.classList.add('blinky')
  if (currentLayout === 5) currentSquare.classList.add('pinky')
  if (currentLayout === 6) currentSquare.classList.add('inky')
  if (currentLayout === 7) currentSquare.classList.add('clyde')
}