<!-- <template>

  <div class="container">
    <div class="card w-96">
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
.container{
  display: flex;
  justify-content: center;
}
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
.btn-submit:hover{
  background-color: #df6942;
}
</style> -->

<template>
  <div class="container">
    <div class="card w-96">
      <h1>Crear Tarea</h1>
      <Form @submit="handleSubmit">
        <div class="flex-col">
          <Field
            name="title"
            type="text"
            :rules="validateTitle"
            v-slot="{ field, errors }"
          >
            <div>
              <input
                v-bind="field"
                v-model="title"
                class="input-title"
                placeholder="Titulo"
              />
            </div>
            <div>
              <ErrorMessage name="title" class="validation"/>
            </div>
          </Field>
        </div>

        <div class="flex-col">
          <Field
            name="description"
            type="text"
            :rules="validateDescription"
            v-slot="{ field, errors }"
          >
            <div>
              <input
                v-bind="field"
                v-model="description"
                class="input-description"
                placeholder="Descripción"
              />
            </div>
            <div>
              <ErrorMessage name="description" class="validation" />
            </div>
          </Field>
        </div>

        <div class="btn">
          <button class="btn-submit" type="submit">Crear</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import TaskAPI from "../services/APITask";

let title = ref("");
let description = ref("");

const taskAPI = new TaskAPI();

const emit = defineEmits(["getTasks"]);

const validateTitle = (value) => {
  if (!value) {
    return "El título es requerido";
  }
  if (value.length < 1) {
    return "El título debe tener al menos 1 caracter";
  }
  return true;
};

const validateDescription = (value) => {
  if (!value) {
    return "La descripción es requerida";
  }
  if (value.length < 10) {
    return "La descripción debe tener al menos 10 caracteres";
  }
  return true;
};

const handleSubmit = async (values, { resetForm }) => {
  const task = {
    title: values.title,
    description: values.description,
  };

  try {
    await taskAPI.createTask(task);
    // Limpiar los campos después de crear la tarea
    resetForm();
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
.container {
  display: flex;
  justify-content: center;
}
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
  width: 100%;
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
  width: 100%;
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
.btn-submit:hover {
  background-color: #df6942;
}

.validation {
  color: #ff9b7b;
}
</style>