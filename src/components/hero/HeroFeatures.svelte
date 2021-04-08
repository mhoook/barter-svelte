<script>
  let cls = ''

  export { cls as class }

  const items = [
    {
      iconUrl: 'src/assets/icons/money.svg',
      description: 'Без бюджета',
    },
    {
      iconUrl: 'src/assets/icons/easy.svg',
      description: 'Проще чем разместить объявление на авито',
    },
    {
      iconUrl: 'src/assets/icons/money.svg',
      description: 'Без бюджета',
    },
    {
      iconUrl: 'src/assets/icons/exercise.svg',
      description: 'В 10 раз быстрее, чем искать самостоятельно',
    },
  ]
</script>

<div class="hero__features-wrapper {cls}">
  <div class="hero__features-items row">
    {#each items as item}
      <div class="hero__features-item-wrapper col-auto">
        <div class="hero__features-item d-flex align-items-center">
          <img src={item.iconUrl} alt="" />
          <label class="hero__features-item-description ml-10" for="">
            {item.description}
          </label>
        </div>
      </div>
    {/each}
  </div>
</div>
