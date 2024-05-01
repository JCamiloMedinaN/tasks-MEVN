<template>
  <div>
    <CreateTask @getTasks="getAllTasks"/>
    <GetTasks :tasks="tasks"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TaskAPI from '../services/APITask';
import CreateTask from "../components/CreateTask.vue";
import GetTasks from "../components/GetTasks.vue";

//Función de obtener tareas
const tasks = ref([])

const  getAllTasks = async () => {
  const taskAPI = new TaskAPI();
  tasks.value = await taskAPI.getAllTasks();
}
//realizar un emit, para relaxionar hijo (component) y padre (homepage)
onMounted(async () => {
  await getAllTasks()
})

</script>

<style scoped></style>
