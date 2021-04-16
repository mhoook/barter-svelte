<script>
  import ForYouItem from './ForYouItem.svelte'

  export let items = []
</script>

<div class="{$$restProps.class} for-you-items">
  {#each items as item, i}
    <ForYouItem class="for-you-items__item col-12" {...item} reverse={i % 2} />
  {/each}
</div>

<style lang="scss" global>
  @import './ForYouItemsList.scss';
</style>
