<script>
  import Card from '../../UI/card/Card.svelte'

  export let imageUrl
  export let description
</script>

<li class="d-flex align-items-center">
  <Card
    class="list__features-image-wrapper"
    bodyCls="d-flex align-items-center justify-content-center"
    primaryGradient
    small
  >
    <img class="list__features-description-image" src={imageUrl} alt="" />
  </Card>
  <span class="list__features-description ml-10">{@html description}</span>
</li>
