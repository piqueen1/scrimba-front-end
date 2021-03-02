// Use Fetch with this URL, https://jsonplaceholder.typicode.com/posts/1, to get a single blog post and render the blog title and body to the page.

async function getPost() {
  const postPromise = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await postPromise.json();
  

  const html = `
  <h3>${posts[0].title}</h3>
  <p>${posts[0].body}</p>
  `;

  document.body.innerHTML = html;
}

getPost();