<script>
  export let href
  export let noroute
  export let noStyle
  import { router } from '../../router'

  const clickHandler = (e) => {
    if (!noroute) {
      e.preventDefault()
      router.push(e.target.getAttribute('href'))
    }
  }
</script>

<a class="{$$restProps.class} {!noStyle&&'link'||''}" {href} {noroute} on:click={clickHandler}> <slot /> </a>

<style lang="scss">
  @import './Link.scss';
</style>
