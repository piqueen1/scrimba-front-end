// create a promise 
// wait for 4 seconds
// resolve or reject based on randomBool
// false - reject 'hero is on vacation'
// true - resolve 'batman is here'


const randomBool = Boolean(Math.round(Math.random())) // returns either 0 or 1 

function heroPromise() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (randomBool) {
                resolve('Batman is here')
            } else {
                reject(new Error('Hero is on vacation'))
            }
        },4000)
    })
}

(async function() {
    try{
        const result = await heroPromise()
        console.log(result)
    }catch(err){
        console.log(err)
    }
})();
