<template>
  <div class="card">
    <h1>Crear Tarea</h1>
    <input
      class="input-title"
      type="text"
      placeholder="Titulo"
      v-model="title"
    />
    <input
      class="input-description"
      type="text"
      placeholder="Descripción"
      v-model="description"
    />
    <div class="btn">
      <button class="btn-submit" @click="handleSubmit">Crear</button>
    </div>
  </div>
</template>

/TODO: vee validate, para validaciones de formularios en Vue
<script setup>
import { ref } from "vue";
import TaskAPI from "../services/APITask";

let title = ref("");
let description = ref("");

const taskAPI = new TaskAPI();

const emit = defineEmits(["getTasks"]);

const handleSubmit = async () => {
  const task = {
    title: title.value,
    description: description.value,
  };

  try {
    await taskAPI.createTask(task);
    // Limpiar los campos después de crear la tarea si es necesario
    title.value = "";
    description.value = "";
    console.log("Tarea creada correctamente");
    console.log("Task created:", task);
    // Actualizar la lista de tareas
    emit("getTasks");
  } catch (error) {
    console.error("No se pudo crear la tarea:", error);
  }
};
</script>
<style scoped>
.card {
  padding: 1rem;
  background-color: #1b2132;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  margin-bottom: 0.3rem;
  font-weight: 700;
  color: white;
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

.btn {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.btn-submit {
  align-content: center;
  width: 6rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #ff9b7b;
  color: white;
  font-weight: bolder;
  font-size: medium;
  cursor: pointer;
}
</style>
