<script>
  export let title = 'ЕСТЬ ПРЕДЛОЖЕНИЯ?'
  export let imageUrl = 'src/assets/images/suggestion.png'
</script>

<section class="suggestion">
  <div class="suggestion__wrapper container">
    <h2 class="suggestion__title">{@html title}</h2>
    <div class="suggestion__content-wrapper">
      <div class="suggestion__content-grid row">
        <div class="suggestion__content-image-wrapper col-md-6 col-12">
          <img src={imageUrl} alt="" style="width: 100%;" />
        </div>
        <div
          class="suggestion__content-text col-md-6 col-12 d-flex align-items-center"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss" global>
  @import './Suggestion.scss';
</style>
