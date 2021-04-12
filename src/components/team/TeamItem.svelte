<script>
  export let imageUrl
  export let title
  export let description
  export let featuresItems = []
  export let socialUrl
  export let socialTitle
</script>

<div class="team__item-wrapper">
  <div class="team__item">
    <div class="team__item-content">
      <div class="team__item-image">
        <img class="team__item-image-avatar" src={imageUrl} alt="" />
      </div>
      <h5 class="team__item-title mt-20 mb-0">{@html title}</h5>
      <p class="team__item-description text-muted mt-0">
        {@html description}
      </p>
      <ul class="team__item-features list list--primary">
        {#each featuresItems as item}
          <li class="team__item-features-item list__item d-flex">
            <img src="src/assets/svg/pin.svg" alt="" />
            <span class="ml-10">{item}</span>
          </li>
        {/each}
      </ul>
      <a
        href={socialUrl}
        class="team__item-link text text--gradient-primary mt-15"
        alt=""
      >
        {@html socialTitle}
      </a>
    </div>
  </div>
</div>
