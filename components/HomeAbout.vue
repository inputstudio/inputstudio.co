<template>
  <div id="about" class="about--wrapper animated--section">
    <div class="about--title">
      <h1>Think outside the box</h1>

      <nuxt-link :to="{ path: '/', hash: '#services' }">
        <ion-icon name="arrow-down" size="large"></ion-icon>
      </nuxt-link>
    </div>

    <div class="about--content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi sequi deleniti? Assumenda nam numquam
        pariatur, animi non, corrupti tempore voluptas temporibus magnam, itaque possimus asperiores perspiciatis ipsa
        fuga? Aliquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi sequi deleniti? Assumenda nam numquam
        pariatur, animi non, corrupti tempore voluptas temporibus magnam, itaque possimus asperiores perspiciatis ipsa
        fuga? Aliquam.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about--wrapper {
  width: 60vw;
  padding: 6rem 0;
  margin: auto;
  margin-bottom: 6rem;
  display: flex;
  border-bottom: 1px solid #000;
}

.about--title {
  width: 40%;
  flex-shrink: 0;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about--content {
  padding-left: 1rem;
}

p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
}
</style>
