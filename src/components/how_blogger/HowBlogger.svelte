<script>
  import HowBloggerItemsList from './HowBloggerItemsList.svelte'

  export let id
  export let title = 'Как это работает'
  export let items = [
    {
      imageUrl: 'src/assets/svg/fast-loading-draw.svg',
      indexImageUrl: 'src/assets/svg/01.svg',
      lightIndexImageUrl: 'src/assets/svg/01_gray.svg',
      title: 'Пройди быструю регистрацию, добавь Instagram аккаунт и статистику',
      description:
        'Регистрация занимает не более 1 минуты и не требует заполнения огромного количества полей',
    },
    // {
    //   imageUrl: 'src/assets/svg/profile-image-draw.svg',
    //   indexImageUrl: 'src/assets/svg/02.svg',
    //   lightIndexImageUrl: 'src/assets/svg/02_gray.svg',
    //   title: 'ДОБАВЬ ИНСТАГРАМ АККАУНТ',
    //   description: 'Введи логин инстаграма и загрузи статистику',
    // },
    {
      imageUrl: 'src/assets/svg/job-offers-draw.svg',
      indexImageUrl: 'src/assets/svg/02.svg',
      lightIndexImageUrl: 'src/assets/svg/02_gray.svg',
      title: 'Выбирай подходящее предложение',
      description:
        'Принимай и отклоняй входящие заявки и оставляй заявки самостоятельно',
    },
    // {
    //   imageUrl: 'src/assets/svg/products-draw.svg',
    //   indexImageUrl: 'src/assets/svg/04.svg',
    //   lightIndexImageUrl: 'src/assets/svg/04_gray.svg',
    //   title: 'ПОЛУЧИ ТОВАР ИЛИ УСЛУГУ',
    //   description: 'Дождись доставки товара или предоставления услуги',
    // },
    {
      imageUrl: 'src/assets/svg/selfie-draw.svg',
      indexImageUrl: 'src/assets/svg/03.svg',
      lightIndexImageUrl: 'src/assets/svg/03_gray.svg',
      title: 'Получай товар или услугу и делай рекомендацию в Instagram',
      description: 'Дождись предоставления услуги или доставки товара и выложи stories или пост по указанным условиям',
    },
  ]
</script>

<section {id} class="how-blogger">
  <div class="how-blogger__wrapper container">
    <h2 class="how-blogger__title">{@html title}</h2>
    <div class="how-blogger__content">
      <HowBloggerItemsList {items} />
    </div>
  </div>
</section>

<style lang="scss" global>
  @import './HowBlogger.scss';
</style>
