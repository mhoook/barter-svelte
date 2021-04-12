<script>
  import HowItemsList from './HowItemsList.svelte'

  export let id
  export let title = 'ПОЧЕМУ БАРТЕР С МИКРО-БЛОГЕРАМИ ЭТО ВЫГОДНО'
  export let items = [
    {
      imageUrl: 'src/assets/svg/takeout-boxes.svg',
      indexImageUrl: 'src/assets/svg/01_gray.svg',
      title: 'У микроблогеров более целевая и качественная аудитория',
    },
    {
      imageUrl: 'src/assets/svg/make-it-rain.svg',
      indexImageUrl: 'src/assets/svg/02_gray.svg',
      title:
        'Не нужен бюджет на рекламу, расходы равны себестоимости товаров или услуг',
    },
    {
      imageUrl: 'src/assets/svg/product-photo.svg',
      indexImageUrl: 'src/assets/svg/03_gray.svg',
      title:
        'Искренняя рекомендация товара или услуги эффективнее рекламы за деньги',
    },
  ]
</script>

<section {id} class="how">
  <div class="how__wrapper container">
    <h2 class="how__title">{title}</h2>
    <div class="how__content">
      <HowItemsList {items} />
    </div>
  </div>
</section>

<style lang="scss" global>
  @import './How.scss';
</style>
