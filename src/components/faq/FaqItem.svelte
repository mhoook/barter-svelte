<script>
  export let index
  export let title
  export let description
</script>

<div class="{$$restProps.class} faq__item accordion-item">
  <h2 class="faq__item-header accordion-header" id="faq-heading{index}">
    <button
      class="faq__item-header-button accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#faq-content{index}"
      aria-expanded="false"
      aria-controls="faq-content{index}"
    >
      <slot name="title">{title}</slot>
    </button>
  </h2>
  <div
    id="faq-content{index}"
    class="accordion-collapse collapse"
    aria-labelledby="faq-heading{index}"
    data-bs-parent="#faq-accordion"
  >
    <div class="accordion-body">
      <slot>{description}</slot>
    </div>
  </div>
</div>
