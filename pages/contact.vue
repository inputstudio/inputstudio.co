<template>
  <div class="wrapper">
    <form class="contact--us" method="post" action="#">
      <h1>Formulaire de contact</h1>
      <h3>Merci de nous contacter en remplissant correctement tous les champs ci-dessous.</h3>
      <div class="form--group">
        <label for="full_name">Nom et prénoms</label>
        <input id="full_name" type="text" name="full_name" />
      </div>
      <div class="form--group">
        <label for="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>
      <div class="form--group">
        <label for="subject">Objet</label>
        <select id="subject" type="text" name="subject">
          <option value="" selected></option>
          <option value="static_website">Site vitrine</option>
          <option value="ecommmerce">Site commercial</option>
          <option value="mobile_app">Application mobile</option>
          <option value="refactoring">Refonte d'un site existant</option>
          <option value="mockup">Realisation d'une maquette de site</option>
          <option value="other">Autres</option>
        </select>
      </div>
      <div class="form--group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5"></textarea>
      </div>
      <button type="submit" class="btn--submit">Envoyer</button>
    </form>
    <div class="icon--div">
      <ion-icon name="paper-plane"></ion-icon>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Nous contacter - Input Studio',
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  @media screen and (max-width: 768px) {
    padding: 2em;
    overflow: hidden;
  }
  @media screen and (min-width: 768px) {
    padding: 4em;
    padding-right: 0;
    display: flex;
    justify-content: space-between;
  }
}

.contact--us {
  display: flex;
  flex-direction: column;
  gap: 1em;

  input,
  textarea,
  select {
    padding: 0.5em 1em;
    border: 0.2em solid rgb(168, 168, 168);
    border-radius: 0.3em;
  }

  select {
    background-color: white;
  }

  textarea {
    resize: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
}

.form--group {
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  width: 100%;
  transform: translateX(-100%);

  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      animation: from-left 600ms 100ms * $i;
      animation-fill-mode: forwards;
    }
  }
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 0.7em;
}

.btn--submit {
  @include button($border: solid, $cursor: pointer);
  @include fade-in-animation
}

.icon--div {
  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;

    ion-icon {
      font-size: 27em;
      @include fade-in-animation($duration: 1000ms, $delay: 800ms)
    }
  }
}

@keyframes from-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
