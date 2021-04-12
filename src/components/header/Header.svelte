<script>
  import * as animateScroll from 'svelte-scrollto'
  import Navbar from '../navbar/Navbar.svelte'

  export let loginUrl
  export let navItems = [
    {
      onClick: (e) => animateScroll.scrollto(e.target, { element: '.how' }),
      title: 'Для бизнеса',
    },
    {
      url: '#',
      title: 'Для блогера',
    },
    {
      url: '#',
      title: 'О нас пишут',
    },
    {
      url: '#',
      title: 'Отзывы',
    },
    {
      url: '#',
      title: 'Команда',
    },
  ]
</script>

<header class="header">
  <Navbar items={navItems} {loginUrl}><slot /></Navbar>
</header>

<style lang="scss">
  @import './Header.scss';
</style>
