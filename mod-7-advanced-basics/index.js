// Use Fetch with this URL, https://jsonplaceholder.typicode.com/posts/1, to get a single blog post and render the blog title and body to the page.

async function getPost() {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await promise.json()
    const html = `
        <h1>${data.title}</h1>
        <p>${data.body}</p>
        `
    document.querySelector('body').innerHTML = html
        
}

getPost()