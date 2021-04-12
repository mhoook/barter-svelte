<script>
  let cls = ''

  export { cls as class }
  export let imageUrl
  export let description
</script>

<div class="for-what-item__wrapper {cls}">
  <div class="for-what-item d-flex align-items-center">
    <div class="for-what-item__image">
      <img src={imageUrl} alt="" />
    </div>
    <div class="for-what-item__text ml-15">
      <p class="for-what-item__description mb-0">
        {@html description}
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  @import './ForWhatItem.scss';
</style>
