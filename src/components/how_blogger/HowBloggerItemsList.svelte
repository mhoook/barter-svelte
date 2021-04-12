<script>
  import HowBloggerItem from './HowBloggerItem.svelte'

  export let items = []
</script>

<div class="how-blogger__list row gy-5">
  {#each items as item, i}
    <HowBloggerItem {...item} reverse={i % 2} />
  {/each}
</div>
