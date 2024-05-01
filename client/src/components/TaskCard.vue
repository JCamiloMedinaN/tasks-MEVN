<template>
  <div>
    <h1>Crear Tarea</h1>
    <input type="text" placeholder="Titulo" v-model="title" />
    <input type="text" placeholder="Descripción" v-model="description" />
    <button @click="handleSubmit">Crear</button>
  </div>
  <div class="taskslist">
    <ul>
      <li class="card" v-for="task in tasks" :key="task._id">
        <div class="input-card">
          <h3 v-if="!task.editing">{{ task.title }}</h3>
          <input class='input-title' v-else placeholder="Titulo" type="text" v-model="task.updatedTitle" />
          <p class="description" v-if="!task.editing">{{ task.description }}</p>
          <input class='input-description' v-else placeholder="Descripción" type="text" v-model="task.updatedDescription" />
          <p class="date">{{ formatDate(task.date) }}</p>
        </div>
        <template v-if="!task.editing">
          <button @click="task.editing = true">Editar</button>
          <button @click="deleteTask(task._id)">Eliminar</button>
        </template>
        <template v-else>
          <button @click="saveChanges(task)">Guardar</button>
          <button @click="task.editing = false">Cancelar</button>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, watch } from "vue";
import { format } from "date-fns";
import { getAllTasks } from "../services/tasksServices";

const tasks = ref([]);

const fetchTasks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/tasks");
    // const response = await getAllTasks();
    tasks.value = response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

const formatDate = (date) => {
  return format(new Date(date), "dd/MM/yyyy");
};

onMounted(fetchTasks);
watch(tasks, () => {
  console.log("Tareas actualizadas:", tasks.value);
});

// ------------------------------

let title = ref("");
let description = ref("");

const handleSubmit = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/tasks", {
      title: title.value,
      description: description.value,
    });
    console.log("Tarea creada:", response.data);
    await fetchTasks();
  } catch (error) {
    console.error("No se pudo crear la tarea", error);
  }
};

// ---------------------------------

const saveChanges = async (task) => {
  try {
    await axios.put(`http://localhost:3000/api/tasks/${task._id}`, {
      title: task.updatedTitle,
      description: task.updatedDescription,
    });
    task.editing = false;
    await fetchTasks();
  } catch (error) {
    console.error("Error al guardar los cambios", error);
  }
};

// ---------------------------------

const deleteTask = async (taskId) => {
  try {
    await axios.delete(`http://localhost:3000/api/tasks/${taskId}`);
    console.log("Tarea eliminada:", taskId);
    // Actualizar la lista de tareas después de eliminar la tarea
    await fetchTasks();
  } catch (error) {
    console.error("Error al eliminar la tarea", error);
  }
};
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

.input-card {
  display: flex;
  flex-direction: column;
}

.input-title {
  font-weight: 600;
  color: black;
  background-color: #e8ff00;
  border-radius: 0.5rem;
  padding: 0.5rem;
  outline: none;
  border: none;
  word-wrap: break-word; 
}

.input-description {
  font-weight: 600;
  color: white;
  background-color: #1b2132;
  padding: 0.5rem;
  outline: none;
  border: none;
  word-wrap: break-word;
  white-space: pre-wrap;
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
