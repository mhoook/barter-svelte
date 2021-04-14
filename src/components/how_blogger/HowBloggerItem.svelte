<script>
  export let el
  export let imageUrl
  export let indexImageUrl
  export let lightIndexImageUrl
  export let title
  export let description
  export let reverse
  export let active = false
  export let scrollY

  $: if (el && scrollY) {
    active =
      scrollY > el.offsetTop - window.innerHeight / 2 &&
      scrollY < el.offsetTop + window.innerHeight / 4
  }
</script>

<div
  class="{$$restProps.class} how-blogger__item col-12"
  class:active
  bind:this={el}
>
  <div class="how-blogger__item-content row gx-5">
    <div
      class="how-blogger__item-content-image-wrapper col-md-6 col-12"
      class:order-md-2={reverse}
    >
      <img
        class="how-blogger__item-content-image"
        src={imageUrl}
        style="width: 100%;"
        alt=""
      />
    </div>
    <div class="col-md-6 col-12" class:order-md-1={reverse}>
      <div class="how-blogger__item-content-wrapper">
        <div class="how-blogger__item-content-overlay" />
        <div
          class="how-blogger__item-content-index d-flex justify-content-center"
        >
          <img src={active ? lightIndexImageUrl : indexImageUrl} alt="" />
        </div>
        <div class="how-blogger__item-content-text-wrapper">
          <h4 class="how-blogger__item-content-title">{@html title}</h4>
          <p class="how-blogger__item-content-description">
            {@html description}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
