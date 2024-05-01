<template>
  <h1>Crear Tarea</h1>
  <input type="text" placeholder="Titulo" v-model="title" />
  <input type="text" placeholder="Descripción" v-model="description" />
  <button @click="handleSubmit">Crear</button>
</template>


/TODO:  vee validate, para validaciones de formularios en Vue
<script setup>
import { ref } from "vue";
import TaskAPI from "../services/APITask";

let title = ref("");
let description = ref("");

const taskAPI = new TaskAPI()

const emit = defineEmits(["getTasks"])

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
    emit("getTasks")

  } catch (error) {
    console.error("No se pudo crear la tarea:", error);
  }
};
</script>
<style></style>
