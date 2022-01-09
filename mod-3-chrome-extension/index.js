let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let listItems = ""

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  renderLeads()
})

function renderLeads() {
  for (let i=0; i<myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"
  }
  ulEl.innerHTML = listItems
}
