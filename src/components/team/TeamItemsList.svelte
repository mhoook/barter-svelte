<script>
  import { onMount } from 'svelte'
  import { slick } from '../../utils/slick'
  import TeamItem from './TeamItem.svelte'

  let el
  export let items = []

  onMount(() => {
    slick(el, {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
  })
</script>

<div class="team__items" bind:this={el}>
  {#each items as item}
    <div>
      <TeamItem {...item} />
    </div>
  {/each}
</div>
