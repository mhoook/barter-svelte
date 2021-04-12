<script>
  import FeaturesSecondaryItem from './FeaturesSecondaryItem.svelte'

  export let items = []
</script>

<div class="features-secondary-items row gy-5">
  {#each items as item}
    <FeaturesSecondaryItem
      class="features-secondary-items__item col-6"
      {...item}
    />
  {/each}
</div>

<style lang="scss" global>
  @import './FeaturesSecondaryItemsList.scss';
</style>
