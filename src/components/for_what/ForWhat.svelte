<script>
  import ForWhatItemsList from './ForWhatItemsList.svelte'

  export let id
  export let title = 'ЧТО В ИТОГЕ ТЫ ПОЛУЧИШЬ, ИСПОЛЬЗУЯ СЕРВИС'
  export let imageUrl = 'src/assets/images/hero-mobile.png'
  export let items = [
    {
      imageUrl: 'src/assets/icons/account-circle.svg',
      description: 'Новых клиентов и подписчиков в instagram',
    },
    {
      imageUrl: 'src/assets/icons/gramophone-circle.svg',
      description: 'Доверие к бренду и рост его узнаваемости',
    },
    {
      imageUrl: 'src/assets/icons/document-circle.svg',
      description: 'Создание контента в instagram от лидеров мнений',
    },
  ]
  let el
  let width = 1320
  $: if (el) {
    width = Math.min(el.offsetWidth/2, 1320/2)
  }
</script>

<section {id} class="for-what" bind:this={el}>
  <div class="for-what__wrapper container">
    <h2 class="for-what__title">{title}</h2>
    <div class="for-what__content">
      <div class="row">
        <div
          class="for-what__content-image-wrapper col-md-6 col-12 order-1 order-md-0"
        >
          <div class="for-what__content-image-overlay" style="left: calc(0px - (100vw - {width}px) - 200px);" />
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
