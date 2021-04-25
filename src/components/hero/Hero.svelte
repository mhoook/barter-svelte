<script>
  import HeroActions from './HeroActions.svelte'
  import HeroFeatures from './HeroFeatures.svelte'

  export let showMobileActions = false
  export let actionsCls = 'mt-100 d-flex align-items-center hide-for-mobile'
  export let imageUrl = ''
  export let image2Url = ''
  export let title = ''
  export let description = ''
  export let featuresItems = [
    {
      iconUrl: 'src/assets/icons/money.svg',
      description: 'Без бюджета',
    },
    {
      iconUrl: 'src/assets/icons/easy.svg',
      description: 'Проще чем разместить объявление на авито',
    },
    {
      iconUrl: 'src/assets/icons/money.svg',
      description: 'Без бюджета',
    },
    {
      iconUrl: 'src/assets/icons/exercise.svg',
      description: 'В 10 раз быстрее, чем искать самостоятельно',
    },
  ]
</script>

<section class="hero">
  <div class="hero__wrapper container">
    <div class="hero__content">
      <div class="hero__content-grid row">
        <div
          class="hero__content-text-wrapper col-md-8 col-12 order-1 order-md-0 d-flex align-items-end"
        >
          <div class="hero__content-text mb-20">
            <h1 class="hero__content-title">
              {@html title}
            </h1>
            <div class="hero__content-description">
              <p class="mt-15 mb-0">
                {@html description}
              </p>
            </div>
            <slot name="features">
              <HeroFeatures class="col-12 order-2" items={featuresItems} />
            </slot>
            <HeroActions class="hero__content-actions {actionsCls}">
              <slot name="actions" />
            </HeroActions>
          </div>
        </div>
        <div class="hero__content-image-wrapper col-md-4 col-12">
          {#if image2Url}
            <img class="hero__content-image hero__content-image2" src={image2Url} alt="" />
          {/if}
          <img class="hero__content-image" src={imageUrl} alt="" />
        </div>

        {#if showMobileActions}
          <div class="col-12 order-3 hide-for-desktop">
            <slot name="mobileActions">
              <HeroActions
                class="d-flex align-items-center justify-content-center"
                showDescription
              />
            </slot>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style lang="scss" global>
  @import './Hero.scss';
</style>
