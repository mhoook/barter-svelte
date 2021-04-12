<script>
  const year = new Date().getFullYear()
  export let logoUrl = 'src/assets/images/logo.png'
  export let socialItems = [
    {
      url: '',
      imageUrl: 'src/assets/svg/instagram.svg',
    },
    {
      url: '',
      imageUrl: 'src/assets/svg/vk.svg',
    },
    {
      url: '',
      imageUrl: 'src/assets/svg/facebook.svg',
    },
    {
      url: '',
      imageUrl: 'src/assets/svg/telegram.svg',
    },
  ]
</script>

<footer class="footer">
  <div class="footer__wrapper container">
    <div class="footer__content row">
      <div class="col-md col-12">
        <div class="footer__logo-wrapper">
          <a class="footer__logo-brand navbar-brand" href="#!">
            <img class="footer__logo" src={logoUrl} height="50" alt="" />
          </a>
        </div>
        <ul class="footer__navigation list list--primary mt-50">
          <slot />
        </ul>
      </div>

      <div
        class="footer__social-icons-wrapper col-md-auto col-12 d-flex align-items-center"
      >
        <div class="footer__social-icons social-icons mt-35">
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
      </div>
    </div>
    <div class="footer__copyright-wrapper w-100">
      <label class="text-muted" for="">© {year} Barter</label><br />
      <label class="text-muted" for="">все права защищены </label>
    </div>
  </div>
</footer>

<style lang="scss" global>
  @import './Footer.scss';
</style>
