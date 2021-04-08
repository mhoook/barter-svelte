<script>
  let cls

  export { cls as class }
  export let imageUrl
  export let indexImageUrl
  export let title
  export let reverse = false
</script>

<div class="how__item {cls}">
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
          <img src={indexImageUrl} alt="" />
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

<style>
  .how__item-content-image {
    width: 100%;
  }
</style>
