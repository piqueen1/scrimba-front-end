const promise = ()=>{
    return new Promise((resolve,reject)=>{
        reject(new Error('Something went wrong'))
    })
}

const resolver = async (promise)=>{
    try {
        await promise
    } catch(err) {
        console.log('I have an error')
    } finally {
        return 'I errored out'
    }
}


(async function() {
    const test = await resolver(promise)
    console.log(test)
})();