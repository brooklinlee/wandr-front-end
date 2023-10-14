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

export {
  create,
  show,
  index,
}