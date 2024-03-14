<template>
  <h1>Crear Tarea</h1>
  <input type="text" placeholder="Titulo" v-model="title" />
  <input type="text" placeholder="Descripción" v-model="description" />
  <button @click="handleClick">Crear</button>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"

let title = ref("")
let description = ref("")

const handleClick = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/tasks", {
      title: title.value,
      description: description.value,
    });
    console.log("Tarea creada:", response.data)
    // Puedes hacer algo con la respuesta si lo deseas
  } catch (error) {
    console.error("No se pudo crear la tarea", error)
  }
}
</script>

<style></style>
