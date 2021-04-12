<script>
  import Card from '../../UI/card/Card.svelte'

  let cls = ''

  export { cls as class }
  export let imageUrl
  export let description
</script>

<div class="{cls} features-secondary-item">
  <div class="features-secondary-item__content d-flex align-items-center">
    <Card
      class="features-secondary-item__content-image"
      bodyCls="d-flex align-items-center justify-content-center"
      primaryGradient
    >
      <img src={imageUrl} alt="" />
    </Card>
    <div class="features-secondary-item__content-text ml-30">
      <p class="features-secondary-item__content-description">
        {@html description}
      </p>
    </div>
  </div>
</div>

<style lang="scss" global>
  @import './FeaturesSecondaryItem.scss';
</style>
