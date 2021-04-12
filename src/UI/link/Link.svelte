<script>
  let cls = ''

  export { cls as class }
  export let href
</script>

<a class="{cls} link" {href}> <slot /> </a>

<style lang="scss">
  @import './Link.scss';
</style>
