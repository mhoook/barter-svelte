<script>
  import HowSecondaryItemsList from './HowSecondaryItemsList.svelte'

  export let title = 'КАК ЭТО РАБОТАЕТ'
  export let items = [
    {
      indexImageUrl: 'src/assets/svg/01_light.svg',
      title: 'ПРОХОДИШЬ БЫСТРУЮ РЕГИСТРАЦИЮ',
      description:
        'Регистрация занимает не более 1 минуты и не требует заполнения огромного количества полей',
    },
    {
      indexImageUrl: 'src/assets/svg/02_light.svg',
      title: 'СОЗДАЕШЬ ПЕРВОЕ ПРЕДЛОЖЕНИЕ',
      description:
        'Размещаешь информацию о товаре/услуге, который хочешь предоставить блогеру по бартеру, скидку, которую готов дать его подписчикам и краткое описание задания которое ему нужно сделать',
    },
    {
      indexImageUrl: 'src/assets/svg/03_light.svg',
      title:
        'ПОЛУЧАЕШЬ ЗАЯВКИ ОТ БЛОГЕРОВ И&nbsp;ОТПРАВЛЯЕШЬ ПЕРСОНАЛЬНЫЕ ПРЕДЛОЖЕНИЯ',
      description:
        'Ты будешь видеть рейтинг качества аккаунта блогеров, всю необходимую аналитику их аудитории, портфолио и отзывы бизнесов с которыми блогеры уже сотрудничали',
    },
    {
      indexImageUrl: 'src/assets/svg/04_light.svg',
      title: 'ПРЕДОСТАВЛЯЕШЬ ТОВАР/УСЛУГУ И БЛОГЕРЫ СРАЗУ ТЕБЯ РЕКОМЕНДУЮТ',
      description:
        'О деталях предоставления можно договариваться во встроенном чате или созвониться с блогером по телефону',
    },
    {
      indexImageUrl: 'src/assets/svg/05_light.svg',
      title: 'АНАЛИЗИРУЕШЬ ЭФФЕКТИВНОСТЬ ПРОДАЖ',
      description:
        'Мы соберем с блогеров скриншоты статистики и предоставляем подробный аналитический отчет с результатами рекламы каждого блогера, включая окупаемость',
    },
  ]
</script>

<section class="how-secondary">
  <div class="how-secondary__wrapper container">
    <h2 class="how-secondary__title">{title}</h2>
    <div class="how-secondary__content">
      <div class="row">
        <div class="how-secondary__content-image-wrapper col-md-6 col-12" />
        <HowSecondaryItemsList class="col-md-6 col-12" {items} />
      </div>
    </div>
  </div>
</section>

<style lang="scss" global>
  @import './HowSecondary.scss';
</style>
