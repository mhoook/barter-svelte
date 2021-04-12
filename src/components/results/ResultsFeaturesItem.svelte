<script>
  import Card from '../../UI/card/Card.svelte'

  export let imageUrl
  export let description
</script>

<li class="d-flex align-items-center">
  <Card class="list__features-image-wrapper" primaryGradient small>
    <img
      class="list__features-description-image"
      src={imageUrl}
      width="28"
      alt=""
    />
  </Card>
  <span class="list__features-description ml-10">{@html description}</span>
</li>
