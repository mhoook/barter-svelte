<script>
  import Card from '../../UI/card/Card.svelte'

  let cls = ''

  export { cls as class }
  export let index
  export let title
  export let description
  export let imageUrl
  export let reverse
  export let hideLine
</script>

<div class="{cls} why-item" class:why-item--hide-line={hideLine}>
  <div class="why-item__content row">
    <div
      class="why-item__content-wrapper col-md-6 col-12 "
      class:order-md-2={reverse}
      class:order-md-0={!reverse}
      class:order-1={!reverse}
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
