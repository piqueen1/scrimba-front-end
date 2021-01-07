const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['almond milk', 'avocado', 'cheese', 'halloumi' ]
const fridge = []

//Challenge: Please fill the fridge with 5 items of your choice. 


//Chellenge 2: You have bought some almond milk. Please remove it from the
//buyList and add it to the items in fridge.


//BONUS 1:Write a function that will remove an item from the fridge, and put it in the
//buyList, on the press of the moveUp button.

function moveUp(){
    //your code
}

upButton.addEventListener('click', moveUp)

//BONUS 2:Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    //your code
}

downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge