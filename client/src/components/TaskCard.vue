<!-- TaskCard.vue -->
<template>
  <div>
    <h2>Lista de Tareas</h2>
    <ul>
      <li v-for="task in tasks" :key="task._id">
        {{ task.title }} - {{ task.description }}
        <button @click="deleteTask(task._id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getTasksRequest, deleteTasksRequest } from "../api/tasks.js"; 

export default {
  setup() {
    const tasks = ref([]);

    const fetchTasks = async () => {
      try {
        const response = await getTasksRequest();
        tasks.value = response.data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    const deleteTask = async (taskId) => {
      try {
        await deleteTasksRequest(taskId); 
        tasks.value = tasks.value.filter((task) => task._id !== taskId);
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    };

    onMounted(fetchTasks); // Llama a fetchTasks cuando el componente se monte

    return {
      tasks,
      deleteTask,
    };
  },
};
</script>
