<script>
  import HowMainItemsList from './HowMainItemsList.svelte'

  export let id
  export let el
  export let title = 'Как это работает'
  export let items = [
    {
      imageUrl: 'src/assets/svg/how-image1.svg',
      indexImageUrl: 'src/assets/svg/01.svg',
      title: 'БИЗНЕС СОЗДАЕТ СВОЕ ПРЕДЛОЖЕНИЕ',
    },
    {
      imageUrl: 'src/assets/svg/how-image2.svg',
      indexImageUrl: 'src/assets/svg/02.svg',
      title: 'БЛОГЕР ВИДИТ ПРЕДЛОЖЕНИЕ И ОСТАВЛЯЕТ ЗАЯВКУ',
    },
    {
      imageUrl: 'src/assets/svg/how-image3.svg',
      indexImageUrl: 'src/assets/svg/03.svg',
      title:
        'БИЗНЕС ПОДТВЕРЖДАЕТ ПОДХОДЯЩИЕ ЗАЯВКИ И ПРЕДОСТАВЛЯЕТ ТОВАР ИЛИ УСЛУГУ',
    },
    {
      imageUrl: 'src/assets/svg/how-image4.svg',
      indexImageUrl: 'src/assets/svg/04.svg',
      title:
        'БЛОГЕР ДЕЛАЕТ РЕКОМЕНДАЦИЮ БИЗНЕСА В ИНСТАГРАМ И ПРЕДОСТАВЛЯЕТ СТАТИСТИКУ С РЕЗУЛЬТАТАМИ',
    },
  ]
</script>

<section {id} class="how-main" bind:this={el}>
  <div class="how-main__wrapper container">
    <h2 class="how-main__title">{@html title}</h2>
    <div class="how-main__content">
      <HowMainItemsList {items} />
    </div>
  </div>
</section>

<style lang="scss" global>
  @import './HowMain.scss';
</style>
