<template>
  <div>
    <h1>Tareas</h1>
    <!-- <CreateTask /> -->
    <!-- <TaskCard /> -->
    <!-- <CreateTask />
    <GetTasks /> -->
    <HomePage />
  </div>
</template>

<script>
// import TaskCard from "./components/TaskCard.vue" // Asegúrate de que la ruta sea correcta según tu estructura de directorios
// import CreateTask from "./components/CreateTask.vue"
// import CreateTask from './components/CreateTask.vue'
// import GetTasks from './components/GetTasks.vue'
import HomePage from './pages/HomePage.vue'

export default {
  components: {
    // CreateTask,
    // TaskCard
    // CreateTask,
    // GetTasks
    HomePage
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>