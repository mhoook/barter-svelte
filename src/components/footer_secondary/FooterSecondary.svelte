<script>
  const year = new Date().getFullYear()
  export let logoUrl = 'src/assets/images/logo.png'
  export let menuItems = [
    {
      title: 'ДОКУМЕНТЫ',
      items: [
        {
          url: '/staticfiles/public/docs/agreement.pdf',
          title: 'Пользовательское соглашение',
        },
      ],
    },
    {
      title: 'ПОМОЩЬ',
      items: [
        {
          url: 'https://t.me/barter_social',
          title: 'Telegram',
        },
      ],
    },
    {
      title: 'КОНТАКТЫ',
      items: [
        {
          url: 'mailto:info@barter.social',
          title: 'info@barter.social',
        },
      ],
    },
  ]
  export let socialItems = [
    {
      url: 'https://www.instagram.com/barter.social/',
      imageUrl: 'src/assets/svg/instagram.svg',
    },
    {
      url: 'https://t.me/barter_social',
      imageUrl: 'src/assets/svg/telegram.svg',
    },
  ]
</script>

<footer class="footer-secondary">
  <div class="footer-secondary__wrapper container">
    <div class="footer-secondary__content row">
      <div class="col-md-3 col-5">
        <div class="footer-secondary__logo-social">
          <img class="footer-secondary__logo" src={logoUrl} alt="" />
          <div class="social-icons mt-35">
            <div class="social-icons__content">
              <div class="row gx-md-2 gx-1">
                {#each socialItems as item}
                  <div class="col">
                    <a href={item.url} target="_blank">
                      <div class="social-icons__item">
                        <img src={item.imageUrl} alt="" />
                      </div>
                    </a>
                  </div>
                {/each}
              </div>
            </div>
          </div>
          <p class="footer-secondary__copyright mt-35">© {year} Barter</p>
        </div>
      </div>
      <div class="col-md-9 col-7">
        <div class="row">
          {#each menuItems as menuItem}
            <div
              class="footer-secondary__documents footer-secondary__menu col-md-4 col-12"
            >
              <h5 class="footer-secondary__menu-title">{menuItem.title}</h5>
              <ul class="footer-secondary__menu-items">
                {#each menuItem.items as item}
                  <li class="footer-secondary__menu-item">
                    <a href={item.url} noroute alt=""> {item.title} </a>
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</footer>

<style lang="scss" global>
  @import './FooterSecondary.scss';
</style>
