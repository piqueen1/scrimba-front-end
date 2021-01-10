const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const singleEntry = document.createElement('div');
const entriesNav = document.querySelector('.entries-nav');
let entryNumber = 1

function addEntryToDom(event) {
  event.preventDefault();
  singleEntry.innerText = entryTextbox.value;
  singleEntry.className = 'single-entry';
  singleEntry.style.display = 'none';
  entriesSection.appendChild(singleEntry);
  entryTextbox.value = '';

  const displayEntryButton = document.createElement('button')
  displayEntryButton.className = 'display-entry-button'
  displayEntryButton.innerText = entryNumber++
  entriesNav.appendChild(displayEntryButton)
}

entryForm.addEventListener('submit', addEntryToDom)

