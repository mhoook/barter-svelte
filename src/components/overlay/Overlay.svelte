<script context="module">
  import { writable } from 'svelte/store'

  let overlayActive = writable(false)

  export const toggleOverlay = () => overlayActive.update((v) => !v)
</script>

<script>
</script>

<div class="overlay" class:overlay--active={$overlayActive} />

<style lang="scss" global>
  @import './Overlay.scss';
</style>
