<script>
  export let indexImageUrl
  export let imageUrl
  export let title
  export let reverse
</script>

<div class="{$$restProps.class} how-main__item col-12">
  <div class="how-main__item-content row">
    <div
      class="how-main__item-content-image-wrapper col-md-6 col-12"
      class:order-md-2={reverse}
    >
      <img
        class="how-main__item-content-image"
        src={imageUrl}
        style="width: 100%;"
        alt=""
      />
    </div>
    <div class="col-md-6 col-12">
      <div class="how-main__item-content-wrapper">
        <div class="how-main__item-content-index d-flex justify-content-center">
          <img src={indexImageUrl} alt="" />
        </div>
        <h4 class="how-main__item-content-title">{@html title}</h4>
      </div>
    </div>
  </div>
</div>
