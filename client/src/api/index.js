
const url = "URL";

export const fetchPosts = async () => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}

export const createNewPost = async (newPost) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(post => post)
    .catch(err => console.log(err));
}

export const updatePost = async (id, updatedPost) => {
  return fetch(url + '/' + id, {
    method: "PATCH",
    body: JSON.stringify(updatedPost),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(post => post)
    .catch(err => console.log(err));
}

export const deletePost = async (id) => {
  return fetch(url + '/' + id, {
    method: "DELETE",
  })
    .then(response => response.json())
    .catch(err => console.log(err));
}

export const likePost = async (id) => {
  return fetch(`${url}/like-post/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(post => post)
    .catch(err => console.log(err));
}

