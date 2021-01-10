const entryForm = document.getElementById('entryForm')
const entriesSection = document.getElementById('entries')
const entryTextbox = document.getElementsByClassName('entry-textbox')
const singleEntry = document.createElement('div')

function addEntryToDom(event) {
  event.preventDefault();
  singleEntry.innerText = entryTextbox[0].value;
  singleEntry.className = 'single-entry';
  entriesSection.appendChild(singleEntry);
}

entryForm.addEventListener('submit', addEntryToDom)

