<script>
  export let href
  export let primary
  export let outlinePrimary
  export let light
  export let noroute
  export let style

  import { router } from '../../router'

  const clickHandler = (e) => {
    if (!noroute) {
      e.preventDefault()
      router.push(e.target.getAttribute('href'))
    }
  }

</script>

<a
  class="{$$restProps.class} button btn"
  class:btn-outline-primary={outlinePrimary}
  class:btn-primary={primary}
  class:btn-light={light}
  {href}
  {style}
  noroute={noroute}
  on:click={clickHandler}
>
  <slot />
</a>

<style lang="scss">
  @import './Button.scss';
</style>
