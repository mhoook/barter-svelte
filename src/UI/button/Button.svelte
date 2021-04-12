<script>
  let cls = ''

  export { cls as class }
  export let href
  export let primary
  export let outlinePrimary
  export let light
</script>

<a
  class="{cls} button btn"
  class:btn-outline-primary={outlinePrimary}
  class:btn-primary={primary}
  class:btn-light={light}
  {href}
  on:click
>
  <slot />
</a>

<style lang="scss">
  @import './Button.scss';
</style>
