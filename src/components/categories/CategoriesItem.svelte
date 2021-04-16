<script>
  export let active = false
  export let title
</script>

<div class="{$$restProps.class} categories-item" class:active on:click>
  <slot>{title}</slot>
</div>

<style lang="scss" global>
  @import './CategoriesItem.scss';
</style>
