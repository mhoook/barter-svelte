<script>
  import { onMount } from 'svelte'
  import { slick } from '../../utils/slick'
  import ReviewsItem from './ReviewsItem.svelte'

  export let items = []
  let el

  onMount(() => {
    slick(el, {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    })
  })
</script>

<div class="reviews__items" bind:this={el}>
  {#each items as item}
    <div>
      <ReviewsItem {...item} />
    </div>
  {/each}
</div>
