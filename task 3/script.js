document.addEventListener('DOMContentLoaded', () => {
    const posts = [
      {
        title: "My First Blog Post",
        content: "This is the content of my first blog post."
      },
      {
        title: "Another Post",
        content: "Here is some more content."
      }
    ];
  
    const content = document.getElementById('content');
  
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
      content.appendChild(postElement);
    });
  });
    