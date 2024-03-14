<template>
  <div>
    <h1>Tareas</h1>
    <CreateTask />
    <TaskCard />
  </div>
</template>

<script>
import TaskCard from "./components/TaskCard.vue" // Asegúrate de que la ruta sea correcta según tu estructura de directorios
import CreateTask from "./components/CreateTask.vue"

export default {
  components: {
    CreateTask,
    TaskCard
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>