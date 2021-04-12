<script>
  import FeaturesItemsList from './FeaturesItemsList.svelte'

  export let title = 'ПРЕИМУЩЕСТВА НАШЕГО СЕРВИСА'
  export let items = [
    {
      imageUrl: 'src/assets/svg/hand-white.svg',
      title: 'Простота',
      description:
        'Мы разработали интуитивно понятный интерфейс, который позволяет пользоваться приложением не сложнее чем привычной вам соцсетью',
    },
    {
      imageUrl: 'src/assets/svg/run-man-white.svg',
      title: 'СКОРОСТЬ',
      description:
        'Благодаря сервису ты сможешь подобрать блогеровв 10 раз быстрее чем искать их самостоятельно',
    },
    {
      imageUrl: 'src/assets/svg/chart-white.svg',
      title: 'ЭФФЕКТИВНОСТЬ',
      description:
        'Ты сможешь получать максимальные результаты в продажах, росте узнаваемости и притоке подписчиков при минимальных затратах',
    },
    {
      imageUrl: 'src/assets/svg/guard-white.svg',
      title: 'БЕЗОПАСНОСТЬ',
      description:
        'Риск что ты попадешься на блогера с накрученными или совсем не активными подписчиками близок к нулю',
    },
    {
      imageUrl: 'src/assets/svg/check-circle-white.svg',
      title: 'ДОСТУПНОСТЬ',
      description:
        'Ты можешь создать свое первое предложение абсолютно бесплатно, а далее пользоваться сервисом по цене нескольких походов в ресторан',
    },
  ]
</script>

<section class="features">
  <div class="features__wrapper container">
    <h2 class="features__title">{title}</h2>
    <div class="features__content">
      <FeaturesItemsList class="features__items row gy-5" {items} />
    </div>
  </div>
</section>

<style lang="scss">
  @import './Features.scss';
</style>
