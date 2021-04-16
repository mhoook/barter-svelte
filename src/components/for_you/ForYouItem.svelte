<script>
  export let wrapperCls
  export let imageUrl
  export let description
  export let reverse
</script>

<div class="{wrapperCls} for-you-item__wrapper col-12">
  <div class="{$$restProps.class} for-you-item row">
    <div
      class="for-you-item__content-wrapper col-md-auto col-12"
      class:order-md-2={reverse}
    >
      <div class="for-you-item__content-image-wrapper">
        <img
          class="for-you-item__content-image"
          src={imageUrl}
          alt=""
          style="width: 100%;"
        />
      </div>
    </div>
    <div
      class="for-you-item__content-text-wrapper col d-flex align-items-center"
      class:order-md-1={reverse}
    >
      <p class="for-you-item__content-description">
        {@html description}
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  @import './ForYouItem.scss';
</style>
