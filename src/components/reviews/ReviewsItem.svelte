<script>
  import Card from '../../UI/card/Card.svelte'
  import User from '../user/User.svelte'

  export let user = {
    avatarUrl: 'src/assets/images/avatar.png',
    title: 'Имя клиента',
    description: 'Описание',
  }
</script>

<div class="reviews__item-wrapper">
  <Card class="reviews__item" bodyCls="reviews__item-content">
    <h5 class="reviews__item-title card-title hide-for-mobile">
      Рыбатекст используется дизайнерами, проектировщиками.
    </h5>
    <p class="reviews__item-description card-text mt-5">
      Рыбатекст используется дизайнерами, проектировщиками и фронтендерами,
      когда нужно быстро заполнить макеты или прототипы содержимым. Рыбатекст
      используется дизайнерами, проектировщиками и фронтендерами, когда нужно
      быстро заполнить макеты или прототипы содержимым
    </p>
    <User
      class="reviews__item-author row mt-25"
      dataCls="reviews__item-author-content col d-flex align-items-center justify-content-between"
      {...user}
    >
      <img
        slot="videoplay"
        class="user__data-videoplay-icon"
        src="src/assets/icons/play.svg"
        alt=""
      />
      <a slot="social" href="#!" class="reviews__item-author-link">
        @instagram
      </a>
    </User>
  </Card>
  <!-- <div class="reviews__item card">
    <div class="reviews__item-content card-body">
      <h5 class="reviews__item-title card-title hide-for-mobile">
        Рыбатекст используется дизайнерами, проектировщиками.
      </h5>
      <p class="reviews__item-description card-text mt-5">
        Рыбатекст используется дизайнерами, проектировщиками и фронтендерами,
        когда нужно быстро заполнить макеты или прототипы содержимым. Рыбатекст
        используется дизайнерами, проектировщиками и фронтендерами, когда нужно
        быстро заполнить макеты или прототипы содержимым
      </p>
      <div class="reviews__item-author user row mt-25">
        <div class="reviews__item-author-avatar user__avatar col-auto">
          <img src="src/assets/images/avatar.png" />
        </div>
        <div
          class="reviews__item-author-content user__data col d-flex align-items-center justify-content-between"
        >
          <div>
            <h5 class="reviews__item-author-title user__data-title mb-0">
              Имя клиента
            </h5>
            <p
              class="reviews__item-author-description user__data-description mb-0"
            >
              Описание
            </p>
            <a href="#" class="reviews__item-author-link author__link"
              >@instagram</a
            >
          </div>
          <div class="user__data-videoplay">
            <img
              class="user__data-videoplay-icon"
              src="src/assets/icons/play.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </div> -->
</div>
