<script>
  import { scrollto } from 'svelte-scrollto'
  export let url
  export let scrolltoEl
</script>

<li class="footer__navigation-item" style="cursor:pointer">
  {#if scrolltoEl}
    <a
      class="footer__navigation-link link link--nostyle"
      use:scrollto={scrolltoEl}
      href={url}
      on:click
      on:touchstart
    >
      <slot />
    </a>
  {:else}
    <a
      class="footer__navigation-link link link--nostyle"
      href={url}
      on:click
      on:touchstart
    >
      <slot />
    </a>
  {/if}
</li>
