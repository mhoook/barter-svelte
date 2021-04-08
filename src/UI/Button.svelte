<script>
  let cls = ''

  export { cls as class }
  export let href
</script>

<a class="{cls} btn btn-outline-primary" {href} on:click>
  <slot />
</a>
