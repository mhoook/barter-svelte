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

  const qs = (function(a) {
    if (a == "") return {}
    let b = {}
    for (let i = 0; i < a.length; ++i)
    {
        let p=a[i].split('=', 2)
        if (p.length == 1)
            b[p[0]] = ""
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "))
    }
    return b
  })(window.location.search.substr(1).split('&'))

  const saveRefLink = () => {
    document.querySelectorAll('[href^="/"]').forEach(function(item){
      item.setAttribute('href', item.getAttribute('href')+'?r='+qs.r)
    })
  }

  onMount(() => {
    if (qs.r){
      setTimeout(()=>{
        saveRefLink()
      }, 500)
    }
    router.afterEach((to, from) => {
      if (qs.r){
        saveRefLink()
      }
      const overlay = document.querySelector('.overlay--active')
      if (overlay) {
        document.querySelector('.overlay--active').classList.remove('overlay--active');
      }
      
    })

  })

  $: innerWidth, onInnerWidthChange()

  
</script>

<svelte:window bind:innerWidth />
<EasyrouteProvider {router}>
<!--   <RouterLink to={'/'} />
  <RouterLink to={'/blogger'} />
  <RouterLink to={'/advertiser'} /> -->
  <RouterOutlet />
</EasyrouteProvider>
<!-- <div use:links>
  <Router {url}>
    <Route path="/" component={Main} />
    <Route path="/blogger" component={Blogger} />
    <Route path="/advertiser" component={Advertiser} />
  </Router>
</div> -->
