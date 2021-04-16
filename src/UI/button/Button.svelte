<script>
  export let href
  export let primary
  export let outlinePrimary
  export let light
  export let noroute
</script>

<a
  class="{$$restProps.class} button btn"
  class:btn-outline-primary={outlinePrimary}
  class:btn-primary={primary}
  class:btn-light={light}
  {href}
  noroute={noroute}
  on:click
>
  <slot />
</a>

<style lang="scss">
  @import './Button.scss';
</style>
