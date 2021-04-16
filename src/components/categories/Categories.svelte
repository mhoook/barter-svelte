<script>
  import CategoriesItemsList from './CategoriesItemsList.svelte'

  export let itemsCls = ''
  export let title = 'Категории'
  export let items = []
</script>

<div class="{$$restProps.class} categories">
  <h5 class="categories__title">{@html title}</h5>
  <slot>
    <CategoriesItemsList class={itemsCls} {items} />
  </slot>
</div>

<style lang="scss" global>
  @import './Categories.scss';
</style>
