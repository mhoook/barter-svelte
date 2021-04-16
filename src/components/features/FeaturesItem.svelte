<script>
  import Card from '../../UI/card/Card.svelte'

  export let imageUrl
  export let title
  export let description
</script>

<div class="{$$restProps.class} features-item">
  <div class="row">
    <div
      class="features-item__content-image-wrapper col-md-6 col-auto d-flex justify-content-center"
    >
      <Card
        class="features-item__content-image p-2"
        bodyCls="d-flex align-items-center justify-content-center"
        primaryGradient
        circle
      >
        <img src={imageUrl} alt="" style="max-width: 100%; max-height: 100%;" />
      </Card>
    </div>
    <div
      class="features-item__content-text-wrapper col-md-6 col d-flex align-items-center"
    >
      <div class="features-item__content-text">
        <h4 class="features-item__content-title">{@html title}</h4>
        <p class="features-item__content-description">
          {@html description}
        </p>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import './FeaturesItem.scss';
</style>
