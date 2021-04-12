<script>
  import ResultsFeaturesItemsList from './ResultsFeaturesItemsList.svelte'

  export let items = []
  export let title = 'Рекламная компания в цифрах:'
</script>

<h5 class="results__item-content-features-title mt-60">
  {title}
</h5>
<ResultsFeaturesItemsList {items} />
