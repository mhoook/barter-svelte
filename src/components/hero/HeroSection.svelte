<script>
  import Button from '../../UI/Button.svelte'
  import Link from '../../UI/Link.svelte'
  import Navbar from '../Navbar.svelte'
  import HeroActions from './HeroActions.svelte'
  import HeroFeatures from './HeroFeatures.svelte'

  const title = 'Начни привлекать клиентов через бартер с&nbsp;блогерами'
  const description =
    '1000 проверенных блогеров ждут предложения и готовы рекомендовать твой продукт своим подписчикам.'
  const navItems = [
    {
      url: '/test',
      title: 'Для бизнеса',
    },
    {
      url: '#',
      title: 'Для блогера',
    },
    {
      url: '#',
      title: 'О нас пишут',
    },
    {
      url: '#',
      title: 'Отзывы',
    },
    {
      url: '#',
      title: 'Команда',
    },
  ]
</script>

<section class="hero">
  <header class="header">
    <Navbar items={navItems} />
  </header>

  <div class="hero__wrapper container">
    <div class="hero__content">
      <div class="hero__content-grid row">
        <div
          class="hero__content-text-wrapper col-md-8 col-10 order-1 order-md-0 d-flex align-items-end"
        >
          <div class="hero__content-text mb-20">
            <h1 class="hero__content-title">
              {@html title}
            </h1>
            <div class="hero__content-description">
              <p class="mt-15 mb-0">
                {description}
              </p>
            </div>
            <div
              class="hero__content-actions mt-100 d-flex align-items-center hide-for-mobile"
            >
              <Button class="hero__content-bloger-btn">Установить</Button>
              <Link class="hero__content-more-link ml-40">
                Подробнее о сервисе
              </Link>
            </div>
          </div>
        </div>
        <div class="hero__content-image-wrapper col-md-4 col-12">
          <img
            class="hero__content-image"
            src="src/assets/images/hero.png"
            alt=""
          />
        </div>
        <HeroFeatures class="col-12 order-2" />
        <div class="col-12 order-3 hide-for-desktop">
          <HeroActions />
        </div>
      </div>
    </div>
  </div>
</section>
