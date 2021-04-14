<script>
  import ForWhatItemsList from './ForWhatItemsList.svelte'

  export let id
  export let title = 'ДЛЯ ЧЕГО НУЖЕН НАШ СЕРВИС'
  export let imageUrl = 'src/assets/images/hero-mobile.png'
  export let items = [
    {
      imageUrl: 'src/assets/icons/account-circle.svg',
      description: 'У микроблогеров более целевая и качественная аудитория',
    },
    {
      imageUrl: 'src/assets/icons/gramophone-circle.svg',
      description: 'Для повышения доверия к бренду и его узнаваемости',
    },
    {
      imageUrl: 'src/assets/icons/document-circle.svg',
      description: 'Для создания контента в instagram от лидеров мнений',
    },
  ]
</script>

<section {id} class="for-what">
  <div class="for-what__wrapper container">
    <h2 class="for-what__title">{title}</h2>
    <div class="for-what__content">
      <div class="row">
        <div
          class="for-what__content-image-wrapper col-md-6 col-12 order-1 order-md-0"
        >
          <div class="for-what__content-image-overlay" />
          {#if imageUrl}
            <img class="for-what__content-image" src={imageUrl} alt="" />
          {/if}
        </div>
        <ForWhatItemsList class="col-md-6 col-12 order-0 order-md-1" {items} />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import './ForWhat.scss';
</style>
