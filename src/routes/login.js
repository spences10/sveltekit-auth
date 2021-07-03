import { CLIENT_ID } from '$lib/environment-variables'

const target = 'https://github.com/login/oauth/authorize'
const clilentId = CLIENT_ID

export async function get(req) {
  const sessionId = '3231'
  return {
    status: 302,
    headers: {
      location: `${target}?client_id=${clilentId}&state=${sessionId}`,
    },
  }
}
