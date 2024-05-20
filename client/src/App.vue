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
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>