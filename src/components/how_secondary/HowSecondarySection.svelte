<script>
  import HowSecondaryItemsList from './HowSecondaryItemsList.svelte'
  import items from './howSecondaryItems.json'

  const title = 'КАК ЭТО РАБОТАЕТ'
</script>

<section class="how-secondary">
  <div class="how-secondary__wrapper container">
    <h2 class="how-secondary__title">{title}</h2>
    <div class="how-secondary__content">
      <div class="row">
        <div class="how-secondary__content-image-wrapper col-md-6 col-12" />
        <HowSecondaryItemsList class="col-md-6 col-12" {items} />
      </div>
    </div>
  </div>
</section>
