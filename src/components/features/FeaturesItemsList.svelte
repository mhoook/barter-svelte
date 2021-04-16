<script>
  import FeaturesItem from './FeaturesItem.svelte'

  export let items = []
</script>

<div class="{$$restProps.class} features-items">
  {#each items as item}
    <FeaturesItem class="features-items__item col-12" {...item} />
  {/each}
</div>

<style lang="scss">
  @import './FeaturesItemsList.scss';
</style>
