let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let listItems = ""

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  ulEl.innerHTML = ""
  inputEl.value = ""
  renderLeads()
})

function renderLeads() {
  listItems = ""
  for (let i=0; i<myLeads.length; i++) {
    listItems += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`
  }
  ulEl.innerHTML = listItems
}
