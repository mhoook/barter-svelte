<script>
  export let href
  export let noroute
</script>

<a class="{$$restProps.class} link" {href} {noroute}> <slot /> </a>

<style lang="scss">
  @import './Link.scss';
</style>
