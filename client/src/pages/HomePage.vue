<template>
  <div class="container-tasks">
    <CreateTask @getTasks="getAllTasks" />

    <div class="input-search">
      <input
        class="searh"
        v-model="searchQuery"
        @input="searchTasks"
        placeholder="Buscar tareas..."
      />
    </div>

    <GetTasks :tasks="tasks" @delete="deleteTask" @save="handleTaskSave" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TaskAPI from "../services/APITask";
import CreateTask from "../components/CreateTask.vue";
import GetTasks from "../components/GetTasks.vue";

const tasks = ref([]);
const searchQuery = ref("");

const taskAPI = new TaskAPI();

const getAllTasks = async () => {
  const taskAPI = new TaskAPI();
  tasks.value = await taskAPI.getAllTasks();
};

const searchTasks = async () => {
  if (searchQuery.value.trim() === "") {
    await getAllTasks();
    return;
  }
  tasks.value = await taskAPI.searchTasks(searchQuery.value);
};

onMounted(async () => {
  await getAllTasks();
});

const deleteTask = async (taskId) => {
  try {
    await taskAPI.deleteTask(taskId);
    await getAllTasks();
    console.log("Tarea eliminada exitosamente");
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

const handleTaskSave = () => {
  // Actualiza la lista de tareas después de guardar la tarea editada
  getAllTasks();
};
</script>

<style scoped>
.input-search {
  display: flex;
  justify-content: center;
}

input {
  margin: 1rem 0 1rem 0;
  padding: 0.5rem;
  background-color: #e8ff00;
  border: none;
  border-radius: 0.5rem;
  color: black;
}
</style>
