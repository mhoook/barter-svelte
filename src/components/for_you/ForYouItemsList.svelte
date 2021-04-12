<script>
  import ForYouItem from './ForYouItem.svelte'

  let cls = ''

  export { cls as class }
  export let items = []
</script>

<div class="{cls} for-you-items">
  {#each items as item, i}
    <ForYouItem class="for-you-items__item col-12" {...item} reverse={i % 2} />
  {/each}
</div>

<style lang="scss" global>
  @import './ForYouItemsList.scss';
</style>
