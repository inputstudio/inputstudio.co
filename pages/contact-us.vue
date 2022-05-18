<template>
  <div class="wrapper">
    <form class="contact--us" method="post" action="#">
      <h1>Formulaire de contact</h1>
      <h3>Merci de nous contacter en remplissant correctement tous les champs ci-dessous.</h3>
      <div class="form--group">
        <label for="full_name">Nom et prénoms</label>
        <input id="full_name" type="text" name="full_name">
      </div>
      <div class="row">
        <div class="form--group">
          <label for="email">Email</label>
          <input id="email" type="email" name="email">
        </div>
        <div class="form--group">
          <label for="contact">Contact</label>
          <input id="contact" type="text" name="contact">
        </div>
      </div>
      <div class="form--group">
        <label for="subject">Objet</label>
        <input id="subject" type="text" name="subject">
      </div>
      <div class="form--group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5"></textarea>
      </div>
      <button type="submit" class="btn--submit">Envoyer</button>
    </form>
    <div class="icon-div">
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
  height: 100vh;
  padding: 4em;
  padding-right: 0;
  display: flex;
  justify-content: space-between;
}

.contact--us {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1em;

  input, textarea {
    padding: .5em 1em;
    border: .2em solid rgb(168, 168, 168);
    border-radius: .3em;
  }

  textarea {
    resize: none;
  }
}

.form--group{
  display: flex;
  flex-direction: column;
  gap: .4em;
  width: 100%;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: .7em;
}

.btn--submit {
  @include button($border: solid, $cursor: pointer);
}

ion-icon {
  font-size: 27em;
}
</style>
