<script>
  import FeaturesItem from './FeaturesItem.svelte'

  let cls = ''

  export { cls as class }
  export let items = []
</script>

<div class="features-items {cls}">
  {#each items as item}
    <FeaturesItem class="features-items__item col-12" {...item} />
  {/each}
</div>

<style lang="scss">
  @import './FeaturesItemsList.scss';
</style>
