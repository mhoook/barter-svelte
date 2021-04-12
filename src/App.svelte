<script>
  import { Router, Link, Route } from 'svelte-routing'
  import Advertiser from './pages/Advertiser.svelte'
  import Blogger from './pages/Blogger.svelte'
  import Main from './pages/Main.svelte'

  export let url = ''
</script>

<Router {url}>
  <nav>
    <Link to="/">Main</Link>
    <Link to="blogger">Blogger</Link>
    <Link to="advertiser">Advertiser</Link>
  </nav>
  <Route path="/" component={Main} />
  <Route path="blogger" component={Blogger} />
  <Route path="advertiser" component={Advertiser} />
</Router>
