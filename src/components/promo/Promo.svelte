<script>
  import { createEventDispatcher } from 'svelte'
  import Button from '../../UI/button/Button.svelte'

  const dispatch = createEventDispatcher()

  export let title =
    'Начни привлекать клиентов через блогеров'
  export let contentImageUrl = 'src/assets/images/hero-mobile.png'
  export let googlePlayImageUrl = 'src/assets/svg/google-play.svg'
  export let appStoreImageUrl = 'src/assets/svg/app-store.svg'
  export let action = 'Начать'
  export let actionUrl = '/app/'

  const handleGooglePlayClick = () => {
    dispatch('googlePlayClick')
  }

  const handleAppStoreClick = () => {
    dispatch('appStoreClick')
  }
  let el
  let wrapper
  let width = 1320
  $: if (el && wrapper) {
    width = Math.min(el.offsetWidth, 1320)
    // console.log(wrapper.getBoundingClientRect().x)
    width += wrapper.getBoundingClientRect().x
  }
</script>

<section class="promo" bind:this={el}>
  <div class="promo__wrapper container">
    <div class="promo__content-wrapper">
      <div class="row h-100">
        <div
          class="promo__content-image-wrapper col-md-4 col-3 d-flex justify-content-center"
          bind:this={wrapper}
        >
          {#if contentImageUrl}
            <img class="promo__content-image" src={contentImageUrl} style="left: calc((50vw - {width}px / 2) - 70px);" alt="" />
          {/if}
        </div>
        <div class="col-md-8 col-9 d-flex align-items-center">
          <div class="promo__content-text-wrapper">
            <h4
              class="promo__content-title text text--light text--uppercase text--bold"
            >
              
              {@html title}
            </h4>
            <Button class="promo__content-tryit-btn p-1 pl-15 pr-15 d-flex align-items-center justify-content-center" noroute href={actionUrl} style="max-width: 300px" light>
              {@html action}
            </Button>
           <!--  <div class="promo__content-actions d-flex">
              <Button
                class="promo__btn p-1 pl-15 pr-15 d-flex align-items-center justify-content-center"
                on:click={handleGooglePlayClick}
                light
              >
                <img src={googlePlayImageUrl} alt="" />
              </Button>
              <Button
                class="promo__btn p-1 pl-15 pr-15 ml-10 d-flex align-items-center justify-content-center"
                on:click={handleAppStoreClick}
                light
              >
                <img src={appStoreImageUrl} alt="" />
              </Button>
            </div>
          </div> -->

        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss" global>
  @import './Promo.scss';
</style>
