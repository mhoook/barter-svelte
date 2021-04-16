<script>
  import * as animateScroll from 'svelte-scrollto'
  import Clients from '../components/clients/Clients.svelte'
  import Faq from '../components/faq/Faq.svelte'
  import FeaturesSecondary from '../components/features_secondary/FeaturesSecondary.svelte'
  import Footer from '../components/footer/Footer.svelte'
  import FooterSecondary from '../components/footer_secondary/FooterSecondary.svelte'
  import FooterMenuItem from '../components/footer/FooterMenuItem.svelte'
  import Header from '../components/header/Header.svelte'
  import Hero from '../components/hero/Hero.svelte'
  import HowBlogger from '../components/how_blogger/HowBlogger.svelte'
  import NavbarItem from '../components/navbar/NavbarItem.svelte'
  import Overlay, { toggleOverlay } from '../components/overlay/Overlay.svelte'
  import Promo from '../components/promo/Promo.svelte'
  import Reviews from '../components/reviews/Reviews.svelte'
  import { isMobile } from '../stores'
  import Button from '../UI/button/Button.svelte'
  import Link from '../UI/link/Link.svelte'

  const hero = {
    imageUrl: 'src/assets/images/hero2.png',
    title: 'Сотни товаров и услуг за рекомендацию в инстаграм',
    description: 'Бесплатно получи доступ к товарам и услугам, за которые не придется платить',
    featuresItems: [
      {
        iconUrl: 'src/assets/svg/money-bag-gradient.svg',
        description: 'Бесплатно',
      },
      {
        iconUrl: 'src/assets/svg/filter-gradient.svg',
        description: 'Используя удобные фильтры',
      },
      {
        iconUrl: 'src/assets/svg/hand-gradient.svg',
        description: 'Просто как листать ленту в инстаграм',
      },
    ],
  }

  const featuresSecondary = {
    title: 'БЛАГОДАРЯ СЕРВИСУ ВЫ СМОЖЕТЕ',
    items: [
      {
        imageUrl: 'src/assets/icons/filter.svg',
        description: 'Находить предложения в ленте используя удобные фильтры',
      },
      {
        imageUrl: 'src/assets/icons/badge.svg',
        description: 'Получать напоминания о размещении рекламы',
      },
      {
        imageUrl: 'src/assets/icons/map.svg',
        description: 'Находить предложения на карте',
      },
      {
        imageUrl: 'src/assets/icons/message-bubble.svg',
        description:
          'Договариваться о деталях сотрудничества во встроенном чате',
      },
      {
        imageUrl: 'src/assets/icons/mail.svg',
        description: 'Получать персональные предложения',
      },
      {
        imageUrl: 'src/assets/icons/business-case.svg',
        description: 'Формировать рекламное портфолио для увеличения заказов',
      },
      {
        imageUrl: 'src/assets/icons/ding.svg',
        description: 'Получать PUSH - уведомления о новых предложениях',
      },
    ],
  }

  const toggleMenuMobile = () => {
    if ($isMobile) {
      toggleOverlay()
      document.querySelector('.navbar-toggler').click()
    }
  }
  const handleGooglePlayClick = () => console.log('googlePlayClick')
  const handleAppStoreClick = () => console.log('appStoreClick')
</script>

<Overlay />
<Header loginUrl="/app/role=0">
  <NavbarItem scrolltoEl={'#how'} on:touchstart={toggleMenuMobile}>
    Как это работает
  </NavbarItem>
<!--   <NavbarItem scrolltoEl={'#clients'} on:touchstart={toggleMenuMobile}>
    В сервисе работают
  </NavbarItem> -->
<!--   <NavbarItem scrolltoEl={'#reviews'} on:touchstart={toggleMenuMobile}>
    Отзывы
  </NavbarItem> -->
</Header>
<Hero {...hero} showMobileActions>
  <div slot="actions">
    <Button class="hero__content-bloger-btn" href="/app?role=0" noroute outlinePrimary>Получить предложение</Button>
    <!-- <Link class="hero__content-more-link ml-40">Подробнее о сервисе</Link> -->
  </div>
  <div slot="mobileActions" class="mt-20 p-2 text-center">
    <div class="d-flex align-items-center justify-content-center">
      <Button class="hero__content-bloger-btn" href="/app?role=0" noroute outlinePrimary>Получить предложение</Button
      >
      <!-- <Link class="hero__content-more-link ml-40">Подробнее о сервисе</Link> -->
    </div>
   <!--  <p class="hero__content-actions-description mt-10">
      Установи бесплатное приложение и получи доступ к товарам и услугам, за
      которые не придется платить
    </p> -->
  </div>
</Hero>
<FeaturesSecondary
  style="background-image: url('src/assets/images/solar.png');
  background-repeat: no-repeat;
  background-position: 85% 100%;"
  {...featuresSecondary}
/>
<!-- <Promo
  on:googlePlayClick={handleGooglePlayClick}
  on:appStoreClick={handleAppStoreClick}
/> -->
<HowBlogger id="how" />
<!-- <Clients id="clients" />
<Reviews id="reviews" /> -->
<!-- <Faq imageUrl="src/assets/svg/discover-draw-blogger.svg" /> -->
<!-- <Footer>
  <FooterMenuItem scrolltoEl={'#how'}>Как это работает</FooterMenuItem>
  <FooterMenuItem scrolltoEl={'#clients'}>В сервисе работают</FooterMenuItem>
  <FooterMenuItem scrolltoEl={'#reviews'}>Отзывы</FooterMenuItem>
  <FooterMenuItem url="/policy">Политика конфиденциальности</FooterMenuItem>
</Footer> -->
<FooterSecondary />
