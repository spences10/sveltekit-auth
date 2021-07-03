<script context="module">
  export async function load({ page, session }) {
    if (page.path === '/admin' && session.user === null) {
      return {
        status: 302,
        redirect: '/',
      }
    }
    return { props: {} }
  }
</script>

<script>
  import '../app.postcss'
</script>

<slot />
