<script>
  import HowMainItem from './HowMainItem.svelte'

  export let items = []
</script>

<div class="how-main__list row gy-5">
  {#each items as item, i}
    <HowMainItem {...item} reverse={i % 2} />
  {/each}
</div>
