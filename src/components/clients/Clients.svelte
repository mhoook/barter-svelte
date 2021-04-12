<script>
  import ClientsItemsList from './ClientsItemsList.svelte'

  export let id
  export let title = 'В СЕРВИСЕ РАБОТАЮТ'
  export let items = [
    {
      imageUrl: 'src/assets/images/shoko.png',
    },
    {
      imageUrl: 'src/assets/images/level-kitchen.png',
    },
    {
      imageUrl: 'src/assets/images/saloon-aff.png',
    },
    {
      imageUrl: 'src/assets/images/perekrestok.png',
    },
    {
      imageUrl: 'src/assets/images/tattoo-studio.png',
    },
    {
      imageUrl: 'src/assets/images/dental-innsbruck.png',
    },
  ]
</script>

<section {id} class="clients">
  <div class="clients__wrapper container">
    <h2 class="clients__title">{@html title}</h2>
    <div class="clients__content">
      <ClientsItemsList {items} />
    </div>
  </div>
</section>

<style lang="scss" global>
  @import './Clients.scss';
</style>
