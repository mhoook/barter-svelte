<script>
  import HowSecondaryItem from './HowSecondaryItem.svelte'

  let cls

  export { cls as class }
  export let items = []
</script>

<div class="how-secondary__items-wrapper {cls}">
  <div class="how-secondary__items row gy-5">
    {#each items as item}
      <HowSecondaryItem class="col-12" {...item} />
    {/each}
  </div>
</div>
