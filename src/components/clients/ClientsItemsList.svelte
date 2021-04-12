<script>
  import ClientsItem from './ClientsItem.svelte'

  export let items = []
</script>

<div class="{$$restProps.class} clients__items row gy-3">
  {#each items as item}
    <ClientsItem {...item} />
  {/each}
</div>
