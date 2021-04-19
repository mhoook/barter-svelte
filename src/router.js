import Router from 'svelte-easyroute'
import Main from './pages/Main.svelte'
import Blogger from './pages/Blogger.svelte'
import Advertiser from './pages/Advertiser.svelte'

export const router = new Router({
  mode: 'history', // "hash", "history" or "silent"
  omitTrailingSlash: true, // should we remove the last slash in the url,
  // e.g. "/my/path/" => "/my/path"
  routes: [
    {
      path: '/',
      component: Main,
      name: 'Main',
    },
    {
      path: '/blogger',
      component: Blogger,
      name: 'Blogger',
    },
    {
      path: '/advertiser',
      component: Advertiser,
      name: 'Advertiser',
    },
  ],
})
