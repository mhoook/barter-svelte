<script>
  import HowBloggerItem from './HowBloggerItem.svelte'

  export let items = []
  let scrollY
</script>

<svelte:window bind:scrollY />

<div class="how-blogger__list row gy-5">
  {#each items as item, i}
    <HowBloggerItem {...item} {scrollY} reverse={i % 2} />
  {/each}
</div>
