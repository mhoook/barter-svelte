<script>
  import CategoriesItem from './CategoriesItem.svelte'

  export let itemCls = ''
  export let items = []
</script>

<div class="{$$restProps.class} categories-items">
  <slot>
    {#each items as item}
      <CategoriesItem class={itemCls}>{item}</CategoriesItem>
    {/each}
  </slot>
</div>

<style lang="scss" global>
  @import './CategoriesItemsList.scss';
</style>
