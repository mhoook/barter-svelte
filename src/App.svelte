<script>
  import { Router, Route, links } from 'svelte-routing'
  import { checkMobile } from './helpers/media'
  import Advertiser from './pages/Advertiser.svelte'
  import Blogger from './pages/Blogger.svelte'
  import Main from './pages/Main.svelte'
  import { isMobile } from './stores'

  export let url = ''

  $isMobile = checkMobile()
  let innerWidth = window.innerWidth

  const onInnerWidthChange = () => {
    $isMobile = checkMobile()
  }

  $: innerWidth, onInnerWidthChange()
</script>

<svelte:window bind:innerWidth />
<div use:links>
  <Router {url}>
    <Route path="/" component={Main} />
    <Route path="/blogger" component={Blogger} />
    <Route path="/advertiser" component={Advertiser} />
  </Router>
</div>