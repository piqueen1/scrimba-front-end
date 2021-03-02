// Create a variable for the form element. 
// Then create an event listener for submit. 
// Prevent the default behavior. 
// Post a FormData object to https://httpbin.org/post, 
// then console log the JSON response.

const form = document.getElementById('uploadForm')
form.addEventListener('submit', function(e) {
  e.preventDefault()

  uploadFile(this)
});

async function uploadFile(data) {
  const formData = new FormData()
  const files = data.querySelector('input[type="file"]').files;
  
  for (let i=0; i<files.length; i++) {
    formData.append(`fileInput_${i}`, files[i])
  }

  const options = {
    method: 'POST',
    body: formData
  }

  const promise = await fetch('https://httpbin.org/post', options)
  
  if(promise.ok) {
  const json = await promise.json()
  console.log(json.files)
  } else {
    console.error(`I failed because of ${promise.status}`)
  }
}

//This uploads multiple files at once and submits them with formData
