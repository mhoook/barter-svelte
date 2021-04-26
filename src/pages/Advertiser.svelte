<script>
  import Faq from '../components/faq/Faq.svelte'
  import Features from '../components/features/Features.svelte'
  import FeaturesSecondary from '../components/features_secondary/FeaturesSecondary.svelte'
  import Footer from '../components/footer/Footer.svelte'
  import FooterSecondary from '../components/footer_secondary/FooterSecondary.svelte'
  import ForWhatSection from '../components/for_what/ForWhat.svelte'
  import ForYou from '../components/for_you/ForYou.svelte'
  import Header from '../components/header/Header.svelte'
  import Hero from '../components/hero/Hero.svelte'
  import How from '../components/how/How.svelte'
  import HowSecondary from '../components/how_secondary/HowSecondary.svelte'
  import NavbarItem from '../components/navbar/NavbarItem.svelte'
  import Overlay, { hideOverlay } from '../components/overlay/Overlay.svelte'
  import Promo from '../components/promo/Promo.svelte'
  import Results from '../components/results/Results.svelte'
  import Reviews from '../components/reviews/Reviews.svelte'
  import SlidePhone from '../components/slide_phone/SlidePhone.svelte'
  import Why from '../components/why/Why.svelte'
  import { isMobile } from '../stores'
  import Button from '../UI/button/Button.svelte'
  import Link from '../UI/link/Link.svelte'

  const hero = {
    title: 'Начни привлекать клиентов в свой бизнес через бартер с блогерами',
    description: 'Тысячи проверенных блогеров ждут твоих предложений и готовы рекомендовать твои продукты и услуги своим подписчикам',
    imageUrl: 'src/assets/images/hero.png',
    image2Url: 'src/assets/images/hero-blink.png',
    featuresItems: [
      {
        iconUrl: 'src/assets/svg/money-bag-gradient.svg',
        description: 'Без рекламного бюджета',
      },
      {
        iconUrl: 'src/assets/svg/easy.svg',
        description: 'Проще чем разместить объявление на авито',
      },
      {
        iconUrl: 'src/assets/svg/exercise.svg',
        description: 'В 10 раз быстрее, чем искать самостоятельно',
      },
    ],
  }

  // const goToBlogger = () => {
  //   toggleMenuMobile()
  //   router.push('/blogger')
  // }

  const toggleMenuMobile = () => {
    if ($isMobile) {
      hideOverlay()
      document.querySelector('.navbar-toggler').click()
    }
  }
  const handleGooglePlayClick = () => console.log('googlePlayClick')
  const handleAppStoreClick = () => console.log('appStoreClick')
</script>

<Overlay />
<Header loginUrl="/app/advertiser/auth/login">
  <NavbarItem url="/" on:click={toggleMenuMobile}>Главная</NavbarItem>
  <NavbarItem scrolltoEl={'#how'} on:touchstart={toggleMenuMobile}>
    Это выгодно
  </NavbarItem>
  <NavbarItem scrolltoEl={'#for-what'} on:touchstart={toggleMenuMobile}>
    Для чего нужен сервис
  </NavbarItem>
  <NavbarItem  url="/blogger" on:touchstart={toggleMenuMobile}>Для блогеров</NavbarItem>
  <!--   <NavbarItem scrolltoEl={'#reviews'} on:touchstart={toggleMenuMobile}>
    Отзывы
  </NavbarItem> -->
</Header>
<Hero {...hero} showMobileActions>
  <div slot="actions">
    <Button
      class="hero__content-bloger-btn"
      href="/app/?role=1"
      noroute
      outlinePrimary>Зарегистрироваться</Button
    >
    <!-- <Link class="hero__content-more-link ml-40">Подробнее о сервисе</Link> -->
  </div>
  <div slot="mobileActions" class="p-2 text-center">
    <div class="d-flex align-items-center justify-content-center">
      <Button
        class="hero__content-bloger-btn"
        href="/app/?role=1"
        noroute
        outlinePrimary>Зарегистрироваться</Button
      >
      <!-- <Link class="hero__content-more-link ml-40">Подробнее о сервисе</Link> -->
    </div>
  </div>
  <p class="hero__content-actions-description mt-10">
    Установи бесплатное приложение и получи доступ к товарам и услугам, за
    которые не придется платить
  </p>
</Hero>
{#if $isMobile}
  <HowSecondary />
  <Promo
    on:googlePlayClick={handleGooglePlayClick}
    on:appStoreClick={handleAppStoreClick}
    actionUrl="/app/advertiser/auth/login"
  />
{:else}
  <SlidePhone paddingBottom={140}>
    <HowSecondary />
    <Promo
      contentImageUrl={null}
      on:googlePlayClick={handleGooglePlayClick}
      on:appStoreClick={handleAppStoreClick}
      actionUrl="/app/advertiser/auth/login"
    />
  </SlidePhone>
{/if}
<FeaturesSecondary />
<ForYou />
<Promo
  on:googlePlayClick={handleGooglePlayClick}
  on:appStoreClick={handleAppStoreClick}
  actionUrl="/app/advertiser/auth/login"
/>
<Why />
<Promo
  on:googlePlayClick={handleGooglePlayClick}
  on:appStoreClick={handleAppStoreClick}
  actionUrl="/app/advertiser/auth/login"
/>
<Features />

<How id="how" />
{#if $isMobile}
  <Promo
    on:googlePlayClick={handleGooglePlayClick}
    on:appStoreClick={handleAppStoreClick}
    actionUrl="/app/advertiser/auth/login"
  />
  <ForWhatSection id="for-what" />
{:else}
  <SlidePhone paddingBottom={140}>
    <Promo
      contentImageUrl={null}
      on:googlePlayClick={handleGooglePlayClick}
      on:appStoreClick={handleAppStoreClick}
      actionUrl="/app/advertiser/auth/login"
    />
    <ForWhatSection imageUrl={null} id="for-what" />
  </SlidePhone>
{/if}

<!-- <Results /> -->
<!-- <Reviews id="reviews" /> -->
<!-- <Faq /> -->
<!-- <Promo
  on:googlePlayClick={handleGooglePlayClick}
  on:appStoreClick={handleAppStoreClick}
/> -->
<FooterSecondary />
