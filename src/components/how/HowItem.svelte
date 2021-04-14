<script>
  let cls

  export { cls as class }
  export let el
  export let imageUrl
  export let indexImageUrl
  export let darkIndexImageUrl
  export let title
  export let reverse = false
  export let active = false
  export let scrollY

  $: if (el && scrollY) {
    active =
      scrollY > el.offsetTop - window.innerHeight / 2 &&
      scrollY < el.offsetTop + window.innerHeight / 4
  }
</script>

<div class="how__item {cls}" class:active bind:this={el}>
  <div class="how__item-content row gx-5">
    <div
      class="how__item-content-image-wrapper col-md-6 col-12"
      class:order-md-2={!reverse}
    >
      <img class="how__item-content-image" src={imageUrl} alt="" />
    </div>
    <div class="col-md-6 col-12" class:order-md-1={!reverse}>
      <div class="how__item-content-wrapper">
        <div class="how__item-content-overlay" />
        <div class="how__item-content-index d-flex justify-content-center">
          <img src={active ? indexImageUrl : darkIndexImageUrl} alt="" />
        </div>
        <div class="how__item-content-text-wrapper">
          <h4 class="how__item-content-title">
            {@html title}
          </h4>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss" global>
  @import './HowItem.scss';

  .how__item-content-image {
    width: 100%;
  }
</style>
