<script>
  import ResultsFeaturesItem from './ResultsFeaturesItem.svelte'

  export let items = []
</script>

<ul class="results__item-content-features list list__features list--primary">
  {#each items as item}
    <ResultsFeaturesItem {...item} />
  {/each}
</ul>
