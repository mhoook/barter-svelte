<script>
  export let avatarCls = ''
  export let dataCls = ''
  export let titleCls = ''
  export let descriptionCls = ''
  export let avatarUrl
  export let title
  export let description
  export let inline = false
</script>

<div class="{$$restProps.class} user">
  {#if avatarUrl}
    <img class="{avatarCls} user__avatar" src={avatarUrl} alt="" />
  {/if}
  <div class="{dataCls} user__data" class:user__data--avatar-inline={inline}>
    <div>
      <h4 class="{titleCls} user__data-title">
        {@html title}
      </h4>
      <label class="{descriptionCls} user__data-description text-muted" for="">
        {@html description}
      </label>
      {#if $$slots.social}
        <div class="author__link"><slot name="social" /></div>
      {/if}
    </div>
    {#if $$slots.videoplay}
      <div class="user__data-videoplay">
        <slot name="videoplay" />
      </div>
    {/if}
  </div>
</div>

<style lang="scss" global>
  @import './User.scss';
</style>
