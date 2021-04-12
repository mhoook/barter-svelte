<script>
  export let bodyCls = ''
  export let primaryGradient = false
  export let circle = false
  export let small = false
</script>

<div
  {...$$restProps}
  class="{$$restProps.class} card"
  class:card--primary-gradient={primaryGradient}
  class:card--circle={circle}
  class:card--sm={small}
>
  <div class="card-body {bodyCls}">
    <slot />
  </div>
</div>

<style lang="scss">
  @import './Card.scss';
</style>
