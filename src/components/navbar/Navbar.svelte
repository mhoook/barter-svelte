<script>
  import Button from '../../UI/button/Button.svelte'
  import { hideOverlay, toggleOverlay } from '../overlay/Overlay.svelte'
  import { RouterLink } from 'svelte-easyroute'
  // import { Link } from 'svelte-routing'
  export let loginUrl
  export let items = []

  const toggleMenu = () => hideOverlay()
</script>

<nav class="navbar navbar-expand-lg navbar-light">
  <div class="navbar__container container">
    <RouterLink class="navbar__logo-brand navbar-brand" to="/">
      <img
        class="navbar__logo"
        src="src/assets/images/logo.png"
        alt=""
        height="50"
      />
    </RouterLink>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <img
        class="navbar-toggler-icon-close"
        src="src/assets/icons/burger-close.svg"
        alt=""
        width="22"
        on:click={toggleMenu}
      />
      <span class="navbar-toggler-icon" on:click={toggleOverlay} />
    </button>
    <div
      class="navbar__navbar-collapse collapse navbar-collapse"
      id="navbarSupportedContent"
    >
      <div class="me-auto" />
      <ul class="navbar__navbar-nav navbar-nav mb-2 mb-lg-0">
        <slot>
          {#each items as item}
            <li class="nav-item">
              <a class="nav-link" href={item.url} on:click={item.onClick}
                >{item.title}</a
              >
            </li>
          {/each}
        </slot>
        <li class="navbar__login nav-item">
          <slot name="login">
            <Button
              href={loginUrl}
              noroute
              class="navbar__login-button btn-sm"
              outlinePrimary
            >
              Войти
            </Button>
          </slot>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style lang="scss" global>
  @import './Navbar.scss';
</style>
