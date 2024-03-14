<template>
  <div class="taskslist">
    <ul>
      <li class='card' v-for="task in tasks" :key="task._id">
        <h3>{{ task.title }}</h3>
        <p class='description'>{{ task.description }}</p>
        <p class='date'>{{ formatDate(task.date) }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { format } from 'date-fns'
import axios from "axios"

const tasks = ref([])

const fetchTasks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/tasks")
    tasks.value = response.data
  } catch (error) {
    console.error("Error fetching tasks:", error)
  }
}

const formatDate = (date) => {
return format(new Date(date), 'dd/MM/yyyy')
}

onMounted(fetchTasks)

// on('task-created', fetchTasks)
// Opcional: limpiamos el listener del evento cuando el componente se desmonta para evitar fugas de memoria

onBeforeUnmount(() => {
  // Dejar de escuchar el evento "task-created"
  // Esto es opcional pero puede ser útil en ciertos casos para evitar fugas de memoria
  off('task-created', fetchTasks)
})
</script>

<style scoped>
.taskslist {
  padding: 2rem;
}

.card {
  list-style: none;
  background-color: #1b2132;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

h3 {
  font-weight: 600;
  color: black;
  background-color: #e8ff00;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.description {
  padding: 1rem;
  color: white;
}

.date {
  font-weight: 600;
  text-align: end;
  padding: 1rem;
  color: #ff9b7b;
}
</style>