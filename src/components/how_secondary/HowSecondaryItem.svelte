<script>
  export let indexImageUrl
  export let title
  export let description
</script>

<div class="{$$restProps.class} how-secondary__item-content-wrapper">
  <div class="how-secondary__item-content-index d-flex justify-content-center">
    <img src={indexImageUrl} alt="" />
  </div>
  <div class="how-secondary__item-content-text-wrapper">
    <h4 class="how-secondary__item-content-title">
      {@html title}
    </h4>
    <p class="how-secondary__item-content-description">
      {@html description}
    </p>
  </div>
</div>
