<template>
  <div class="container-tasks">
    <HomePage />
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue'

export default {
  components: {
    HomePage
  },
};
</script>

<style scoped>
.container-tasks {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>