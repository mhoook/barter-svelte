<script>
  export let id
  export let el
  export let title = 'О компании'
  export let contentTitle = 'Миссия:'
  export let description =
    'Мы существуем для того, чтобы помогать блогерам и бизнесу быстро находить друг друга для безопасного, прозрачного и эффективного сотрудничества'
  export let imageUrl = 'src/assets/svg/about-company-image.svg'
</script>

<section {id} class="about-company" bind:this={el}>
  <div class="about-company__wrapper container">
    <h2 class="about-company__title">{@html title}</h2>
    <div class="about-company__content">
      <div class="about-company__content-grid row gy-5">
        <div class="about-company__content-text-wrapper col-md-6 col-12">
          <h5 class="about-company__content-title">{@html contentTitle}</h5>
          <p class="about-company__content-description">
            {@html description}
          </p>
        </div>
        <div class="about-company__content-image-wrapper col-md-6 col-12">
          <img src={imageUrl} alt="" style="width: 100%;" />
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss" global>
  @import './AboutCompany.scss';
</style>
