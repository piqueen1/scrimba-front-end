const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")

function renderEmojis() {
  emojiContainer.innerHTML = ''
  for (let i = 0; i < myEmojis.length; i++) {
      const newSpan = document.createElement('span')
      newSpan.textContent = myEmojis[i]
      emojiContainer.append(newSpan)
  }
}

const pushBtn = document.getElementById('push-btn')
pushBtn.addEventListener('click', function() {
  const emojiInput = document.getElementById('emoji-input')
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value)
    console.log(myEmojis)
    emojiInput.value = ''
    renderEmojis() 
  }
})

const unshiftBtn = document.getElementById('unshift-btn')
unshiftBtn.addEventListener('click', function() {
  const emojiInput = document.getElementById('emoji-input')
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    console.log(myEmojis)
    emojiInput.value = ''
    renderEmojis() 
  }
})
