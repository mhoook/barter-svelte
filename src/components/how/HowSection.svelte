<script>
  import HowItemsList from './HowItemsList.svelte'
  import items from './howItems.json'

  const title = 'ПОЧЕМУ БАРТЕР С МИКРО-БЛОГЕРАМИ ЭТО ВЫГОДНО'
</script>

<section class="how">
  <div class="how__wrapper container">
    <h2 class="how__title">{title}</h2>
    <div class="how__content">
      <HowItemsList {items} />
    </div>
  </div>
</section>
