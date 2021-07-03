import { CLIENT_ID, CLIENT_SECRET } from '$lib/environment-variables'
import fetch from 'node-fetch'

const tokenUrl = 'https://github.com/login/oauth/access_token'
const userUrl = 'https://api.github.com/user'
const clientId = CLIENT_ID
const secret = CLIENT_SECRET

export async function get(req) {
  const code = req.query.get('code')

  const token = await getToken(code)
  const user = await getUser(token)

  return {
    body: JSON.stringify(user, null, 2),
  }
}

function getToken(code) {
  return fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: secret,
      code,
    }),
  })
    .then(response => response.json())
    .then(response => response.access_token)
}

function getUser(token) {
  return fetch(userUrl, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(response => response.json())
}
