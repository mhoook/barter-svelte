<script>
  export let items = []
</script>

<nav class="header__navbar navbar navbar-expand-lg navbar-light">
  <div class="header__navbar-container container">
    <a class="header__logo-brand navbar-brand" href="#!">
      <img
        class="header__logo"
        src="src/assets/images/logo.png"
        alt=""
        height="50"
      />
    </a>
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
      />
      <span class="navbar-toggler-icon" />
    </button>
    <div class="header__navbar-collapse collapse navbar-collapse">
      <div class="me-auto" />
      <ul class="header__navbar-nav navbar-nav mb-2 mb-lg-0">
        {#each items as item}
          <li class="nav-item">
            <a class="nav-link" href={item.url}>{item.title}</a>
          </li>
        {/each}
        <li class="header__login nav-item">
          <a
            href="#!"
            class="header__login-button button button--login btn btn-outline-primary btn-sm"
            >Войти</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
