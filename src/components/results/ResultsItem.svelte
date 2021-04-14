<script>
  import Card from '../../UI/card/Card.svelte'
  import User from '../user/User.svelte'
  import ResultsFeatures from './ResultsFeatures.svelte'

  let cls = ''

  export { cls as class }
  export let featuresItems = [
    {
      imageUrl: 'src/assets/svg/account.svg',
      description: 'Участвовало 150 блогеров',
    },
    {
      imageUrl: 'src/assets/svg/card-in-hand.svg',
      description: 'Предоставил товаров/услуг на 150 000 рублей',
    },
    {
      imageUrl: 'src/assets/svg/promo-ticket.svg',
      description: 'Скидка подписчикам 40%',
    },
    {
      imageUrl: 'src/assets/svg/instagram.svg',
      description: 'Привлечено 300 клиентов',
    },
    {
      imageUrl: 'src/assets/svg/money-bag.svg',
      description: 'Выручка 450 000 рублей',
    },
    {
      imageUrl: 'src/assets/svg/coins.svg',
      description: 'Прибыль +120 000 рублей',
    },
  ]
  export let ownerUser = {
    avatarUrl: 'src/assets/images/avatar.png',
    title: '«Performance_food»',
    description: 'Служба доставки еды',
  }
  export let authorUser = {
    title: 'Катерина Истомина',
    description: 'руководитель PR-службы «Шоколадница»',
  }
  export let description =
    'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым'
</script>

<Card class="{cls} results__item">
  <User class="results__item-content-owner d-flex" {...ownerUser} />
  <div class="results__item-content-text mt-60">
    <p class="results__item-content-description text-muted">
      {description}
    </p>
  </div>
  <User class="results__item-content-author" {...authorUser} />
  <ResultsFeatures items={featuresItems} />
</Card>
