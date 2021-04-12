<script>
  import Button from '../../UI/button/Button.svelte'
  import Link from '../../UI/link/Link.svelte'

  export let showDescription = false
  export let btnText = 'Установить'
  export let linkText = 'Подробнее о сервисе'
  export let description =
    'Установи приложение и размести первое предложение бесплатно'
</script>

<div class="{$$restProps.class} hero__content-actions">
  <slot>
    <Button class="hero__content-bloger-btn" outlinePrimary>{btnText}</Button>
    <Link class="hero__content-more-link ml-40">{linkText}</Link>
    {#if showDescription}
      <p class="hero__content-actions-description mt-10">
        {description}
      </p>
    {/if}
  </slot>
</div>
