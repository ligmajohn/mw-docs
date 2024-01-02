<template>
  <img src="/icon-light.png" alt="Logo of movie-web" class="img-dark" />
  <img src="/icon-dark.png" alt="Logo of movie-web" class="img-light" />
</template>

<style scoped>
img {
  height: 30px;
}
.light .img-dark {
  display: none;
}
.dark .img-light {
  display: none;
}
</style>
