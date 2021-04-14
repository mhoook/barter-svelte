<script>
  import HowItem from './HowItem.svelte'

  let cls

  export { cls as class }
  export let items = []
  let scrollY
</script>

<svelte:window bind:scrollY />

<div class="how__list {cls}">
  {#each items as item, i}
    <HowItem class="col-12" reverse={i % 2} {scrollY} {...item} />
  {/each}
</div>

<style lang="scss">
  @import './HowItemsList.scss';
</style>
