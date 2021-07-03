import { CLIENT_ID, CLIENT_SECRET } from '$lib/environment-variables'
import fetch from 'node-fetch'

const tokenUrl = 'https://github.com/login/oauth/access_token'
const clientId = CLIENT_ID
const secret = CLIENT_SECRET

export async function get(req) {
  const code = req.query.get('code')
  const token = await getToken(code)

  return {
    body: token,
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
