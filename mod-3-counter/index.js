//document.getElementById("count-el").innerText = 5

let count = 0
let saveEl = document.getElementById("save-el")
console.log(saveEl)
function increment() {
  count = count + 1
  document.getElementById("count-el").innerText = count
  console.log(`The count is now ${count}`)
}

function save() {
  let printable = count + " - "
  saveEl.innerText += printable
}
