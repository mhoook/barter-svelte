<script>
  import { onMount } from 'svelte'
  import Card from '../../UI/card/Card.svelte'

  let cls = ''

  export { cls as class }
  export let el
  export let contentEl
  export let index
  export let title
  export let description
  export let imageUrl
  export let reverse
  export let hideLine
  let scrollY
  let defaultEllipseOffset = 30
  let top = defaultEllipseOffset
  let left = defaultEllipseOffset
  let contentWidth = 0
  let contentHeight = 0
  let isMobile = true

  $: if (!isMobile && el && contentEl && scrollY) {
    let lineWidth = contentWidth + (reverse ? 10 : 55)
    let value = (scrollY - (el.offsetTop - window.innerHeight / 2)) * 4
    if (value < 0) {
      top = defaultEllipseOffset
      left = defaultEllipseOffset
    } else if (value > defaultEllipseOffset && value <= lineWidth) {
      top = defaultEllipseOffset
      left = value
    } else if (value > lineWidth && value - lineWidth <= contentHeight) {
      top = value - lineWidth + defaultEllipseOffset
      left = lineWidth
    } else {
      top = contentHeight
      left = lineWidth
    }
  }
  $: if (contentEl) {
    contentWidth = contentEl.getBoundingClientRect().width
    contentHeight = contentEl.getBoundingClientRect().height
  }

  onMount(() => (isMobile = /Mobi/.test(navigator.userAgent)))
</script>

<svelte:window bind:scrollY />

<div class="{cls} why-item" class:why-item--hide-line={hideLine} bind:this={el}>
  {#if !hideLine && !isMobile}
    <img
      src="src/assets/svg/ellipse.svg"
      style="position: absolute; z-index: 9; top: {top}px; left: {reverse
        ? contentWidth - left + 65
        : left}px;"
      alt=""
    />
  {/if}
  <div class="why-item__content row">
    <div
      class="why-item__content-wrapper col-md-6 col-12 "
      class:order-md-2={reverse}
      class:order-md-0={!reverse}
      class:order-1={!reverse}
      bind:this={contentEl}
    >
      <Card
        class="why-item__content-index-card"
        bodyCls="d-flex justify-content-center"
        primaryGradient
      >
        <label class="why-item__content-index" for=""> {index} </label>
      </Card>
      <h4 class="why-item__content-title mt-10">
        {title}
      </h4>
      <p class="why-item__content-description mt-25">
        {description}
      </p>
    </div>
    <div
      class="col-md-6 col-12"
      class:why-item__content-image-wrapper={imageUrl}
      class:order-md-1={reverse && imageUrl}
      class:order-0={reverse && imageUrl}
    >
      {#if imageUrl}
        <img class="why-item__content-image" src={imageUrl} alt="" />
      {/if}
    </div>
  </div>
</div>

<style lang="scss" global>
  @import './WhyItem.scss';
</style>
