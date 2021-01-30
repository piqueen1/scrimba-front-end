let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
  event.preventDefault()
 
  let userFormData = new FormData(document.getElementById('Email-Collector'))
  // use FormData to get the User's name and email    
  let userFirstName = userFormData.get('firstName')
  let userEmailAddress = userFormData.get('emailAddress')

  let updatedHtmlContent = `
      <h2>Congratulations, ${userFirstName}!</h2>

      <p>You're on your way to becoming a BBQ Master!</p>
      
      <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
  `
  let mainContent = document.getElementById('Main-Content')

  mainContent.innerHTML = updatedHtmlContent
})