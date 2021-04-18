<script context="module">
  import { writable } from 'svelte/store'
  import { isMobile } from '../../stores'
  let overlayActive = writable(false)

  export const toggleOverlay = () => overlayActive.update((v) => !v)
  export const hideOverlay = () => overlayActive.update((v) => false)
  const toggleMenuMobile = () => {
    hideOverlay()
    document.querySelector('.navbar-toggler').click()
  }
</script>

<script>
</script>

<div class="overlay" class:overlay--active={$overlayActive} on:click={toggleMenuMobile}/>

<style lang="scss" global>
  @import './Overlay.scss';
</style>
