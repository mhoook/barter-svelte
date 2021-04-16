<script>
  import WhyItem from './WhyItem.svelte'

  export let items = []
</script>

<div class="{$$restProps.class} why-items row">
  {#each items as item, i}
    <WhyItem
      class="why__item col-12"
      {...item}
      index={i + 1}
      reverse={i % 2}
      hideLine={i == items.length - 1}
    />
  {/each}
</div>

<style lang="scss" global>
  @import './WhyItemsList.scss';
</style>
