<script>
  export let items = []
</script>

<div class="{$$restProps.class} hero-features__wrapper">
  <div class="hero-features__items row">
    {#each items as item, i}
      <div
        class="hero-features__item-wrapper d-flex align-items-center col-12 col-md-6"
      >
        <div
          class="hero-features__item d-flex align-items-center"
          class:ml-40={i%2 > 0}
          class:mt-15={i > 0 || true}
        >
          <img src={item.iconUrl} alt="" />
          <label class="hero-features__item-description ml-10" for="">
            {item.description}
          </label>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @import './HeroFeatures.scss';
</style>
