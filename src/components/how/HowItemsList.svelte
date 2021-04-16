<script>
  import HowItem from './HowItem.svelte'

  export let items = []
  let scrollY
</script>

<svelte:window bind:scrollY />

<div class="{$$restProps.class} how__list">
  {#each items as item, i}
    <HowItem class="col-12" reverse={i % 2} {scrollY} {...item} />
  {/each}
</div>

<style lang="scss">
  @import './HowItemsList.scss';
</style>
