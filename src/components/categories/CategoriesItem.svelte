<script>
  let cls = ''

  export { cls as class }
  export let active = false
  export let title
</script>

<div class="{cls} categories-item" class:active on:click>
  <slot>{title}</slot>
</div>

<style lang="scss" global>
  @import './CategoriesItem.scss';
</style>
