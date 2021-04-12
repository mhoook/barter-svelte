<script>
  export let imageUrl
</script>

<div
  class="clients__item col-md-4 col-6 d-flex align-items-center justify-content-center"
>
  <slot>
    <img src={imageUrl} alt="" />
  </slot>
</div>
