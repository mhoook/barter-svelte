<script>
  import Button from '../../UI/Button.svelte'
  import Link from '../../UI/Link.svelte'

  const btnText = 'Установить'
  const linkText = 'Подробнее о сервисе'
  const description =
    'Установи приложение и размести первое предложение бесплатно'
</script>

<div class="hero__content-actions-wrapper">
  <div
    class="hero__content-actions d-flex align-items-center justify-content-center"
  >
    <Button class="hero__content-bloger-btn">{btnText}</Button>
    <Link class="hero__content-more-link ml-40">{linkText}</Link>
  </div>
  <p class="hero__content-actions-description mt-10">
    {description}
  </p>
</div>
