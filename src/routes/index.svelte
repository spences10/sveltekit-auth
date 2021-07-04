<script context="module">
  export async function load({ session }) {
    return {
      props: {
        user: session.user,
      },
    }
  }
</script>

<script>
  export let user
</script>

<h1 class="mt-5 mb-11 text-4xl text-gray-900">
  Welcome to SvelteKit Auth
</h1>
<p class="text-xl mb-5 text-gray-900">
  A simple OAuth example with SvelteKit
</p>

<p class="text-xl mb-5 text-gray-900">
  Try accessing the <code
    ><a class="text-blue-600 hover:underline" href="/admin">admin</a
    ></code
  > route
</p>

{#if user}
  <h2 class="mb-5 text-2xl text-gray-900">Welcome {user}</h2>
  <a href="/logout">
    <button
      class="rounded-lg font-bold bg-purple-700 shadow-md text-white mb-5 py-2 px-8"
      >Logout</button
    >
  </a>
{:else}
  <h2 class="mb-5 text-2xl text-gray-900">You're logged out</h2>
  <a href="/login">
    <button
      class="rounded-lg font-bold bg-purple-700 shadow-md text-white mb-5 py-2 px-8"
      >Login using Github</button
    >
  </a>
{/if}

<p class="text-xl mb-5 text-gray-900">
  Visit <a
    class="text-blue-600 hover:underline"
    href="https://kit.svelte.dev">kit.svelte.dev</a
  > to read the documentation
</p>
