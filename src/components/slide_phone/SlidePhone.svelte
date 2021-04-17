<script>
  export let paddingBottom = 0
  let scrollY
  let el
  let imageEl
  let imageHeight = 475
  let stickyTop = false
  let stickyBottom = false
  let top = 0
  let width = 1320
  $: if (el && imageEl && scrollY) {
    let bottomEdge =
      el.offsetTop +
      el.getBoundingClientRect().height -
      imageHeight -
      paddingBottom -
      90
    stickyBottom = scrollY > bottomEdge
    stickyTop = scrollY > el.offsetTop && scrollY < bottomEdge
    width = Math.min(el.offsetWidth, 1320)
  }
</script>

<svelte:window bind:scrollY />

<div style="position: relative;" bind:this={el}>
  <img
    src="src/assets/images/hero-mobile.png"
    alt=""
    style="z-index: 9; left: calc((100vw - {width}px)/2 + 70px);"
    height={imageHeight}
    class:position-top={stickyTop}
    class:position-absolute={!stickyTop && !stickyBottom}
    class:position-bottom={stickyBottom}
    bind:this={imageEl}
  />
  <slot />
</div>

<style>
  .position-bottom {
    position: absolute;
    bottom: 55px;
  }

  .position-top {
    position: fixed;
    top: 180px;
  }

  .position-absolute {
    position: absolute;
    top: 180px;
  }
</style>
