<template>
  <div id="services" class="services--wrapper">
    <div class="services--header">
      <div class="services--title">
        <h1>Nos services</h1>
      </div>

      <div class="services--desc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi sequi deleniti? Assumenda nam numquam
          pariatur, animi non, corrupti tempore voluptas temporibus magnam, itaque possimus asperiores perspiciatis ipsa
          fuga? Aliquam.
        </p>
      </div>

      <div class="services--grid"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services--wrapper {
  width: 60vw;
  padding: 6rem 0;
  margin: auto;
  margin-bottom: 6rem;
  border-bottom: 1px solid #000;
}

.services--header {
  display: flex;
  margin-bottom: 3rem;
}

.services--title {
  width: 40%;
  flex-shrink: 0;
  padding-right: 1rem;
}

p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
}
</style>
