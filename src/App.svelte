<script>
  import { Router, Link, Route } from 'svelte-routing'
  import { checkMobile } from './helpers/media'
  import Advertiser from './pages/Advertiser.svelte'
  import Blogger from './pages/Blogger.svelte'
  import Main from './pages/Main.svelte'
  import { isMobile } from './stores'

  export let url = ''

  $isMobile = checkMobile()
  let innerWidth = window.innerWidth

  const onInnerWidthChange = () => {
    console.log('onInnerWidthChange')
    $isMobile = checkMobile()
  }

  $: innerWidth, onInnerWidthChange()
  $: console.log({ innerWidth })
</script>

<svelte:window bind:innerWidth />

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
