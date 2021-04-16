<script>
  import HowSecondaryItem from './HowSecondaryItem.svelte'

  export let items = []
</script>

<div class="{$$restProps.class} how-secondary__items-wrapper">
  <div class="how-secondary__items row gy-5">
    {#each items as item}
      <HowSecondaryItem class="col-12" {...item} />
    {/each}
  </div>
</div>
