<script>
  import { Router, Link, Route } from 'svelte-routing'
  import Barter3 from './pages/Barter3.svelte'
  import Barter2 from './pages/Barter2.svelte'

  export let url = ''
</script>

<Router {url}>
  <nav>
    <Link to="/">Barter3</Link>
    <Link to="barter2">Barter2</Link>
  </nav>
  <div>
    <Route path="barter2" component={Barter2} />
    <Route path="/">
      <Barter3 />
    </Route>
  </div>
</Router>
