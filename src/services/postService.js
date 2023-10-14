//services
import * as tokenService from './tokenService'

const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/api/posts`

async function create(postFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postFormData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function show(postId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}`)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function index() {
  try {
    const res = await fetch(BASE_URL)
  return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function deletePost(postId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function update(postFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${postFormData._id}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postFormData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}


async function createComment(postId, commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/comments`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentFormData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function deleteComment(postId, commentId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function createRec(postId, rec) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/recommendations`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rec)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function deleteRec(postId, recId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/recommendations/${recId}`, {
      method: 'DELETE',
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function likePost(postId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/likes`, {
      method: 'PATCH',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (err) { 
    console.log(err)
  }
}

export {
  create,
  show,
  index,
  update,
  createComment,
  deleteComment,
  createRec,
  deleteRec,
  deletePost,
  likePost,
}