<template>
  <div id="about" class="about--wrapper animated--section">
    <div class="about--title">
      <h1>Think outside the box</h1>
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
  width: 100%;
  padding: 6rem;
  margin: auto;
  display: flex;

  @media screen and(max-width: 768px) {
    padding: 6rem 1rem;
    flex-direction: column;
  }
}

.about--title {
  width: 40%;
  flex-shrink: 0;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and(max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
}

.about--content {
  padding-left: 1rem;

  @media screen and(max-width: 768px) {
    padding-left: unset;
  }
}

p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
}
</style>
