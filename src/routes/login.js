import { CLIENT_ID } from '$lib/environment-variables'
import { v4 as uuid } from 'uuid'

const target = 'https://github.com/login/oauth/authorize'
const clilentId = CLIENT_ID

export async function get() {
  const sessionId = uuid()

  return {
    status: 302,
    headers: {
      location: `${target}?client_id=${clilentId}&state=${sessionId}`,
    },
  }
}
