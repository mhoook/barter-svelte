<script>
  import TeamItemsList from './TeamItemsList.svelte'

  export let id
  export let el
  export let title = 'КОМАНДА'
  export let items = [
    {
      imageUrl: 'src/assets/images/team1.png',
      title: 'Евгений Дранников',
      description: 'Founder, Chief Executive Officer',
      featuresItems: [
        'Опыт создания it-продуктов от идеи до монетизации 5 лет',
        'Co-founder socialcrm, toplink.in, instagame.pro и других it-проектов',
        'Участник стартап-реалити шоу «Мой Бизнес».',
      ],
      socialUrl: 'https://instagram.com/drannikov91',
      socialTitle: '@drannikov911',
    },
    {
      imageUrl: 'src/assets/images/team2.png',
      title: 'Степан Самойлов',
      description: 'Co-Founder, Chief Technology Officer',
      featuresItems: [
        'Опыт ведения разработки 6 лет',
        'Архитектор высоконагруженных приложений',
        'Co-Founder&CTO instagame.pro и socialcrm.ru',
      ],
      socialUrl: 'https://instagram.com/samoylov.digital',
      socialTitle: '@samoylov.digital',
    },
    {
      imageUrl: 'src/assets/images/team5.png',
      title: 'Михаил Симачев',
      description: 'Chief Marketing Officer',
      featuresItems: [
        'Опыт в маркетинге с онлайн бизнесами - 4 года, на площадках Instagram и TikTok - 2 года',
        'Эксперт по продвижению и продюсированию блогов в Instagram и TikTok',
        'Участник стартап-реалити шоу «Мой Бизнес».',
      ],
      socialUrl: 'https://instagram.com/seemachev',
      socialTitle: '@seemachev',
    },
    {
      imageUrl: 'src/assets/images/team3.png',
      title: 'Владимир Горбунов',
      description: 'Консультант по продукту',
      featuresItems: [
        '11 лет создает интернет компании',
        'Co-founder Workle, Crypterium, PayQR, Gorod',
        'Early-инвестор barter',
      ],
      socialUrl: 'https://www.instagram.com/gorbunov_vl',
      socialTitle: '@gorbunov_vl',
    },
    {
      imageUrl: 'src/assets/images/team4.png',
      title: 'Евгений Гаврилин',
      description: 'Консультант по маркетингу',
      featuresItems: [
        'Founder в Digital-агентство Nectarin',
        'Co-founder в Boomstarter и Almamat',
        'Early-инвестор barter',
      ],
      socialUrl: 'https://www.instagram.com/evgeniygavrilin',
      socialTitle: '@evgeniygavrilin',
    },
  ]
</script>

<section {id} class="team" bind:this={el}>
  <div class="team__wrapper container">
    <h2 class="team__title">{@html title}</h2>
    <div class="team__content d-flex justify-content-center">
      <TeamItemsList {items} />
    </div>
  </div>
</section>

<style lang="scss" global>
  @import './Team.scss';
</style>
