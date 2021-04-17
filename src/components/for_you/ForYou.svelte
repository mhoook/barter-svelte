<script>
  import ForYouItemsList from './ForYouItemsList.svelte'

  export let title = 'BARTER ТОЧНО ДЛЯ ТЕБЯ ЕСЛИ ТЫ:'
  export let items = [
    {
      imageUrl: 'src/assets/svg/credit-card-payment.svg',
      description:
        'Не имеешь бюджета на рекламу, но привлекать клиентов как-то нужно',
    },
    {
      imageUrl: 'src/assets/svg/empty-cart-draw.svg',
      description:
        'Тестируешь разные каналы и хочешь увеличить продажи товаров и услуг',
    },
    {
      imageUrl: 'src/assets/svg/post-outline-draw.svg',
      description:
        'Давно хочешь попробовать рекламу через блогеров, но ничего в этом не понимаешь',
    },
    {
      imageUrl: 'src/assets/svg/location-search-draw.svg',
      description:
        'Понимаешь что реклама через блогеров эффективна, но не знаешь где их искать и как определять подходящих',
    },
    {
      imageUrl: 'src/assets/svg/social-life-draw.svg',
      description:
        'Тратишь на поиск, отбор, анализ и переписку с блогерами очень много времени и не против сократить его в 10 раз',
    },
    {
      imageUrl: 'src/assets/svg/pull-request-draw.svg',
      description: 'Хочешь повысить доверие к бренду и его узнаваемость',
    },
    {
      imageUrl: 'src/assets/svg/speed-test-draw.svg',
      description: 'Планируешь быстро масштабировать бизнес',
    },
    {
      imageUrl: 'src/assets/svg/opened-tabs-draw.svg',
      description: 'Ищешь способы быстро распродать остатки товаров',
    },
    {
      imageUrl: 'src/assets/svg/buy-house-draw.svg',
      description: 'Ищешь способы повысить посещаемость заведения',
    },
    {
      imageUrl: 'src/assets/svg/social-life-draw.svg',
      description:
        'Думаешь как увеличить количество подписчиков на вашем коммерческом аккаунте',
    },
  ]
</script>

<section class="for-you">
  <div class="for-you__wrapper container-fluid">
    <h2 class="for-you__title">{@html title}</h2>
    <div class="for-you__content">
      <ForYouItemsList class="for-you__items row gy-5" {items} />
    </div>
  </div>
</section>

<style lang="scss" global>
  @import './ForYou.scss';
</style>
