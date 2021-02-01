/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const getUserData = () => {
  return new Promise( (resolve,reject) => {
    setTimeout( () => {
      const error = false;
      if( error ) {
        reject("No user data was found")
      } else {
        resolve("Here is your user data")
      }
    }, 3000)
  })
}

getUserData()
.then( (success) => console.log(success) )
.catch( (error) => console.log(error) );