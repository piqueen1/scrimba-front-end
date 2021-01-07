const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

let buyList = ['almond milk', 'avocado', 'cheese', 'halloumi' ]
let fridge = ['cottage cheese', 'strawberries', 'coconut milk', 'eggs', 'produce']

//Chellenge 2: You have bought some almond milk. Please remove it from the
//buyList and add it to the items in fridge.

function firstFromBuyToFridge() {
    const movedItem = buyList.shift();
    fridge.push(movedItem)
}
firstFromBuyToFridge(buyList)

//BONUS 1:Write a function that will remove an item from the fridge, and put it in the
//buyList, on the press of the moveUp button.

function moveUp() {
    console.log('move up button pressed')
    let lastInFridge = fridge.pop();
    buyList.push(lastInFridge)
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
}

upButton.addEventListener('click', moveUp)

//BONUS 2:Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    console.log('move down button pressed')
    let lastOnBuy = buyList.pop();
    fridge.push(lastOnBuy)
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
}

downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge