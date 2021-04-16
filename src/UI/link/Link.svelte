<script>
  export let href
</script>

<a class="{$$restProps.class} link" {href}> <slot /> </a>

<style lang="scss">
  @import './Link.scss';
</style>
