<script>
  import { scrollto } from 'svelte-scrollto'
  import Link from '../../UI/link/Link'
  export let url
  export let scrolltoEl
</script>

<li class="nav-item d-flex align-items-center justify-content-center" style="cursor: pointer">
  {#if scrolltoEl}
    <a
      class="nav-link"
      use:scrollto={scrolltoEl}
      href={url}
      on:click
      on:touchstart
    >
      <slot />
    </a>
  {:else}
    <Link class="nav-link" href={url} noStyle on:click on:touchstart>
      <slot />
    </Link>
  {/if}
</li>
