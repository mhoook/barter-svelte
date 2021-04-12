<script>
  import FaqItem from './FaqItem.svelte'

  export let items = []
</script>

<div class="faq__items accordion accordion-flush" id="faq-accordion">
  {#each items as item, index}
    <FaqItem {index}>
      <span slot="title">{item.title}</span>
      {item.description}
    </FaqItem>
  {/each}
</div>
