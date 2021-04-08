<script>
  let cls = ''

  export { cls as class }
  export let imageUrl
  export let description
</script>

<div class="for-what__content-item-wrapper {cls}">
  <div class="for-what__content-item d-flex align-items-center">
    <div class="for-what__content-item-image">
      <img src={imageUrl} alt="" />
    </div>
    <div class="for-what__content-item-text ml-15">
      <p class="for-what__content-item-description mb-0">
        {@html description}
      </p>
    </div>
  </div>
</div>
