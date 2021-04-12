<script>
  import Button from '../../UI/button/Button.svelte'
  import Categories from '../categories/Categories.svelte'
  import CategoriesItem from '../categories/CategoriesItem.svelte'
  import CategoriesItemsList from '../categories/CategoriesItemsList.svelte'
  import ResultsItem from './ResultsItem.svelte'

  export let title = 'РЕЗУЛЬТАТЫ НАШИХ ПОЛЬЗОВАТЕЛЕЙ'
  export let activeCategory
  export let items = [
    { category: 'categories1' },
    { category: 'categories1' },
    { category: 'categories2' },
    { category: 'categories3' },
  ]
  export let categories = [
    {
      value: 'categories1',
      title: 'Красота и здоровье',
    },
    {
      value: 'categories2',
      title: 'Магазины одежды и обуви',
    },
    {
      value: 'categories3',
      title: 'Кафе, рестораны и доставка еды',
    },
    {
      value: 'categories4',
      title: 'Развлечения и образ жизни',
    },
    {
      value: 'categories5',
      title: 'Товары для дома',
    },
    {
      value: 'categories6',
      title: 'Фитнес залы и спорт товары',
    },
  ]
  export let moreText = 'Еще'
  let filteredItems = items
  let limit = 1

  const setActiveCategory = (value) => () => {
    if (activeCategory === value) activeCategory = null
    else activeCategory = value
  }

  const more = () => {
    if (limit < filteredItems.length) limit += 1
  }

  const resetLimit = () => (limit = 1)

  $: if (activeCategory) {
    filteredItems = items.filter((item) => item.category === activeCategory)
  } else {
    filteredItems = items
  }

  $: filteredItems, resetLimit()
</script>

<section class="results">
  <div class="results__wrapper container">
    <h2 class="results__title">{@html title}</h2>
    <div class="results__content">
      <div class="row gy-3">
        <div class="results__filter-wrapper col-md-5 col-12">
          <div class="results__filter card">
            <Categories class="card-body p-0">
              <CategoriesItemsList class="results__filter-items mt-60">
                {#each categories as item}
                  <CategoriesItem
                    class="results__filter-item"
                    active={activeCategory == item.value}
                    on:click={setActiveCategory(item.value)}
                  >
                    {item.title}
                  </CategoriesItem>
                {/each}
              </CategoriesItemsList>
            </Categories>
          </div>
        </div>

        <div class="results__items-wrapper col-md-7 col-12">
          <div class="row gy-3">
            {#each filteredItems as item, i}
              {#if i < limit}
                <div class="col-12">
                  <ResultsItem {...item} />
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    </div>

    {#if limit < filteredItems.length}
      <div class="results__actions w-100 d-flex justify-content-center mt-60">
        <Button class="results__actions-loadmore" on:click={more} primary>
          {moreText}
        </Button>
      </div>
    {/if}
  </div>
</section>

<style lang="scss" global>
  @import './Results.scss';
</style>
