<template>
  <div class="conatiner-tasks">
    <CreateTask @getTasks="getAllTasks"/>
    <GetTasks :tasks="tasks" @delete="deleteTask" @save="handleTaskSave" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TaskAPI from '../services/APITask'
import CreateTask from "../components/CreateTask.vue"
import GetTasks from "../components/GetTasks.vue"

const tasks = ref([])

const taskAPI = new TaskAPI()

const  getAllTasks = async () => {
  const taskAPI = new TaskAPI()
  tasks.value = await taskAPI.getAllTasks()
}


onMounted(async () => {
  await getAllTasks()
})

const deleteTask = async (taskId) => {
  try {
    await taskAPI.deleteTask(taskId)
    await getAllTasks();
    console.log("Tarea eliminada exitosamente")
  } catch (error) {
    console.error("Error deleting task:", error)
  }
}

const handleTaskSave = () => {
  // Actualiza la lista de tareas después de guardar la tarea editada
  getAllTasks()
}
</script>

<style scoped>
</style>
