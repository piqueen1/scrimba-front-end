// Use Fetch with this URL, https://jsonplaceholder.typicode.com/posts/1, to get a single blog post and render the blog title and body to the page.

async function getPost() {
  const [postPromise, userPromise] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/users")
  ]);

  const posts = await postPromise.json();
  const users = await userPromise.json();
  
  console.log(users[0])

  const html = `
  <h3>${posts[0].title}</h3>
  <h5>${users.filter(user => user.id === posts[0].userId)[0].name}</h5>
  <p>${users.filter(user => user.id === posts[0].userId)[0].company["name"]}</p>
  <p>${posts[0].body}</p>
  `;

  document.body.innerHTML = html;
}

getPost();