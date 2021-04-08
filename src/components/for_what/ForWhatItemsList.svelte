<script>
  import ForWhatItem from './ForWhatItem.svelte'

  export let items = []
</script>

<div class="for-what__content-items-wrapper col-md-6 col-12 order-0 order-md-1">
  <div class="for-what__content-items row gy-5">
    {#each items as item}
      <ForWhatItem class="col-12" {...item} />
    {/each}
  </div>
</div>
