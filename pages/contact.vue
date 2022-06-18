<template>
  <div class="wrapper">
    <form class="contact--us" @submit.prevent="handleForm()">
      <h1>Vous avez un projet ?</h1>

      <div class="form--group">
        <label for="options">Vous êtes intéressé par...</label>
        <div id="options">
          <div
            v-for="(elt, index) in subjects"
            :key="index"
            :class="{ 'option-chip': true, 'option-chip-active': isSelectedSubject(index) }"
            @click="changeSubject(index)"
          >
            {{ elt }}
          </div>
        </div>
      </div>

      <div class="form--group">
        <label for="fullname">Votre nom</label>
        <input id="fullname" v-model="fullname" type="text" placeholder="John Doe" required />
      </div>
      <div class="form--group">
        <label for="email">Votre adresse email</label>
        <input id="email" v-model="email" type="email" placeholder="johndoe@gmail.com" required />
      </div>
      <div class="form--group">
        <label for="message">Parlez-nous de votre projet</label>
        <textarea
          id="message"
          v-model="message"
          rows="5"
          placeholder="Vous pouvez commencer par vous présenter vous ou votre entreprise, puis vous nous exposerez brièvement votre projet..."
          required
        ></textarea>
      </div>
      <button type="submit" class="btn--submit">Envoyer</button>
      <p class="mail-alt">
        Vous préférez nous envoyer un mail ? <a href="mailto:hello@inputstudio.co">hello@inputstudio.co</a>
      </p>
    </form>
    <div class="icon--div">
      <fa class="icon" :icon="['fas', 'paper-plane']" />
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      fullname: '',
      email: '',
      message: '',
      subjectIndex: 0,
      subjects: [
        'Site vitrine',
        'Boutique en ligne',
        'Application mobile',
        "Refonte d'un site existant",
        'Maquette (UI/UX)',
        'Autres',
      ],
    }
  },
  head() {
    return {
      title: 'Nous contacter - Input Studio',
    }
  },
  computed: {
    subject() {
      return this.subjects[this.subjectIndex]
    },
  },
  methods: {
    isSelectedSubject(index) {
      return this.subjectIndex === index
    },
    changeSubject(index) {
      this.subjectIndex = index
    },
    async handleForm() {
      try {
        await this.$axios.$post('https://hermes.marcaureln.workers.dev', {
          name: this.fullname,
          email: this.email,
          subject: this.subject,
          message: this.message,
        })

        this.fullname = ''
        this.email = ''
        this.message = ''
        this.subjectIndex = 0

        this.$toast.success('Votre message a été envoyé avec succès, vous aurez bientôt de nos nouvelles.')
      } catch (error) {
        this.$toast.success("Une erreur s'est produite, veuillez réessayer plus tard.")
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 2em;

  @media screen and (min-width: 768px) {
    padding: 6em 20vw;
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
    font-size: 1rem;
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

  label {
    margin-bottom: 0.5rem;
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
  margin-bottom: 0.5rem;

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
  @include fade-in-animation;
}

.icon--div {
  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;

    .icon {
      font-size: 20em;
      @include fade-in-animation($duration: 1000ms, $delay: 800ms);
    }
  }
}

#options {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.option-chip {
  @include button($border: solid, $cursor: pointer);
  width: fit-content;
}

.option-chip-active {
  @include button($bg: $background, $color: $on-background, $cursor: pointer);
}

.mail-alt {
  margin-top: 1rem;
  text-align: center;

  a {
    font-weight: bold;
  }
}
</style>
