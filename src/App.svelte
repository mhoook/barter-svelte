<script>
  import { onMount } from 'svelte'
  import { EasyrouteProvider, RouterOutlet, RouterLink } from 'svelte-easyroute'
  import { router } from './router.js'
  // import { Router, Route, links } from 'svelte-routing'
  import { checkMobile } from './helpers/media'
  import Advertiser from './pages/Advertiser.svelte'
  import Blogger from './pages/Blogger.svelte'
  import Main from './pages/Main.svelte'
  import { isMobile } from './stores'

  // export let url = ''

  $isMobile = checkMobile()
  let innerWidth = window.innerWidth

  const onInnerWidthChange = () => {
    $isMobile = checkMobile()
  }

  onMount(() => {
    router.beforeEach((to, from, next) => {
      if (to) console.log(`go to ${to.fullPath}`)
      if (from) console.log(`from ${from.fullPath}`)
      next()
    })

    router.afterEach((to, from) => {
      console.log('We are on new page!')
    })

    router.transitionOut((to, from, next) => {
      console.log('Page "faded away": do something!')
      next()
    })
  })

  $: innerWidth, onInnerWidthChange()
</script>

<svelte:window bind:innerWidth />
<EasyrouteProvider {router}>
  <RouterLink to={'/'} />
  <RouterLink to={'/blogger'} />
  <RouterLink to={'/advertiser'} />
  <RouterOutlet />
</EasyrouteProvider>
<!-- <div use:links>
  <Router {url}>
    <Route path="/" component={Main} />
    <Route path="/blogger" component={Blogger} />
    <Route path="/advertiser" component={Advertiser} />
  </Router>
</div> -->
