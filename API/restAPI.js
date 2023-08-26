/* REST API Methods */

// GET Method
const getMethod = (users) => {
    const ul = document.querySelector('#username-container')
    for (const user of users) {
        const li = document.createElement('li')
        li.innerText = user.username
        ul.appendChild(li)
    }
}

function getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => getMethod(data))
}

document.querySelector('main').addEventListener('click', (e) => {
    if (e.target === document.querySelector('#btn-get')) getData()
})


// POST Method
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

// PUT Method
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

// PATCH Method
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// DELETE Method
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
