<script>
  import AboutCompany from '../components/about_company/AboutCompany.svelte'
  import FooterSecondary from '../components/footer_secondary/FooterSecondary.svelte'
  import Header from '../components/header/Header.svelte'
  import Hero from '../components/hero/Hero.svelte'
  import HowMain from '../components/how_main/HowMain.svelte'
  import NavbarItem from '../components/navbar/NavbarItem.svelte'
  import Overlay, { toggleOverlay } from '../components/overlay/Overlay.svelte'
  import Suggestion from '../components/suggestion/Suggestion.svelte'
  import Team from '../components/team/Team.svelte'
  import { isMobile } from '../stores'
  import Button from '../UI/button/Button.svelte'
  import { RouterLink } from 'svelte-easyroute'
  // import { Link } from 'svelte-routing'
  const hero = {
    imageUrl: 'src/assets/images/hero3.png',
    title: 'Сервис для бартера между блогерами и бизнесом',
    actionsCls: 'mt-100',
    featuresItems: [],
    description:
      'Блогеры получают товары и услуги, а бизнес рекламные посты и stories в instagram',
  }

  const toggleMenuMobile = () => {
    if ($isMobile) {
      toggleOverlay()
      document.querySelector('.navbar-toggler').click()
    }
  }
</script>

<Overlay />
<Header loginUrl="/app/">
  <NavbarItem scrolltoEl={'#how-main'} on:touchstart={toggleMenuMobile}>
    Как это работает
  </NavbarItem>
  <NavbarItem scrolltoEl={'#about-company'} on:touchstart={toggleMenuMobile}>
    О компании
  </NavbarItem>
  <NavbarItem scrolltoEl={'#team'} on:touchstart={toggleMenuMobile}>
    Команда
  </NavbarItem>
</Header>
<Hero {...hero}>
  <div class="d-flex align-items-center" slot="actions">
    <RouterLink to="/blogger">
      <Button class="hero__content-bloger-btn" outlinePrimary>Я блогер</Button>
    </RouterLink>
    <RouterLink to="/advertiser">
      <Button class="hero__content-bloger-btn ml-40" outlinePrimary>
        Я бизнес
      </Button>
    </RouterLink>
  </div>
</Hero>
<HowMain id="how-main" />
<AboutCompany id="about-company" />
<Team id="team" />
<Suggestion>
  <div>
    <div>
      <b>Наша цель:</b>
      <p class="text-muted">
        Стать самым удобным и эффективным в мире приложением для взаимодействия
        блогеров и бизнеса, но для этого нам нужна ваша помощь
      </p>
    </div>
    <div class="mt-25">
      <p>
        Если у вас есть идея или предложение как улучшить сервис, пишите мне в
        direct
      </p>
    </div>
    <div class="mt-40">
      <b>Евгений Дранников</b>
      <p class="text-muted">Founder, CEO компании</p>
    </div>
    <div class="suggestion__actions">
      <Button href="https://t.me/drannikov" class="text text--bold" primary>
        Написать
      </Button>
    </div>
  </div>
</Suggestion>
<FooterSecondary />
