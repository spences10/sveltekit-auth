# SvelteKit auth with GitHub OAuth

To set up you will need to create your own GitHub OAuth app, in GitHub
go to Settings > Developer settings > OAuth Apps > New OAuth App.

Set the Homepage URL to your localhost development port (example:
`http://localhost:3000/`) and the Authorisation Callback URL (example:
`http://localhost:3000/callback`)

Take a note of the CLient ID and generate a new client secret, add
those values to a `.env` file, see `.env.sample` for an example.

## Demo

https://sveltekit-auth-two.vercel.app/

## Thanks

Full credit and thanks to Tom Wilson and his YouTube video detailing
this: https://www.youtube.com/watch?v=D4ZcbudB1n0
