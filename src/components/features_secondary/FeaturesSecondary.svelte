<script>
  import FeaturesSecondaryItemsList from './FeaturesSecondaryItemsList.svelte'

  export let featuresSecondaryEl
  export let title = 'СФЕРЫ ДЛЯ КОТОРЫХ ХОРОШО ПОДХОДИТ СЕРВИС'
  export let items = [
    {
      imageUrl: 'src/assets/svg/lotus.svg',
      description: 'Красота и здоровье',
    },
    {
      imageUrl: 'src/assets/svg/home.svg',
      description: 'Товары для дома',
    },
    {
      imageUrl: 'src/assets/svg/bag.svg',
      description: 'Магазины одежды и обуви',
    },
    {
      imageUrl: 'src/assets/svg/child.svg',
      description: 'Товары для детей',
    },
    {
      imageUrl: 'src/assets/svg/restauraunt.svg',
      description: 'Кафе, рестораны и доставка еды',
    },
    {
      imageUrl: 'src/assets/svg/weight.svg',
      description: 'Фитнес залы и спорт товары',
    },
    {
      imageUrl: 'src/assets/svg/cupcacke.svg',
      description: 'Развлечения и образ жизни',
    },
    {
      imageUrl: 'src/assets/svg/plus-circle.svg',
      description: ' Другие офлайн бизнесы',
    },
  ]
</script>

<section
  class="features-secondary"
  bind:this={featuresSecondaryEl}
  style={$$restProps.style}
>
  <div class="features-secondary__wrapper container">
    <h2 class="features-secondary__title">
      {title}
    </h2>
    <div class="features-secondary__content">
      <FeaturesSecondaryItemsList
        class="features-secondary__items row gy-5"
        {items}
      />
    </div>
  </div>
</section>

<style lang="scss" global>
  @import './FeaturesSecondary.scss';
</style>
