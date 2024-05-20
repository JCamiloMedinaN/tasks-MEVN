<template>
  <div class="taskslist">
    <ul>
      <li class="card" v-for="task in tasks" :key="task._id">
        <div class="input-card">
          <h3 v-if="!task.editing">{{ task.title }}</h3>
          <input
            v-else
            type="text"
            v-model="task.updatedTitle"
            class="title-input"
          />

          <p class="description" v-if="!task.editing">{{ task.description }}</p>
          <textarea
            v-else
            v-model="task.updatedDescription"
            class="description-input"
          ></textarea>

          <p class="date">{{ formatDate(task.date) }}</p>
          <template v-if="task.editing">
            <div class="btn-edit">
              <button class="save" @click="saveTask(task)">Guardar</button>
              <button class="cancel" @click="cancelEdit(task)">Cancelar</button>
            </div>
          </template>
          <div class="crud">
            <button class="delete" @click="deleteTask(task._id)">
              <TrashIcon class="size-5 text-red-500" />
            </button>
            <button
              v-if="!task.editing && typeof task === 'object'"
              class="edit"
              @click="editTask(task)"
            >
              <PencilSquareIcon class="size-5 text-blue-500" />
            </button>

            <button class="done">
              <DocumentCheckIcon class="size-5 text-green-500" />
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import { format } from "date-fns";
import { updateTask } from "@/services/UpdateTask";
import {
  TrashIcon,
  PencilSquareIcon,
  DocumentCheckIcon,
} from "@heroicons/vue/16/solid"

defineProps({
  tasks: { type: Array },
});

const formatDate = (date) => {
  return format(new Date(date), "dd/MM/yyyy")
};

const emit = defineEmits(["delete", "save"])

const deleteTask = (taskId) => {
  emit("delete", taskId)
}

const editTask = (task) => {
  task.editing = true;
  task.updatedTitle = task.title; // Establece el título actual como valor inicial
  task.updatedDescription = task.description; // Establece la descripción actual como valor inicial
};

const saveTask = async (task) => {
  try {
    await updateTask(task._id, {
      title: task.updatedTitle,
      description: task.updatedDescription,
    });
    task.editing = false; // Desactiva el modo de edición
    emit("save") // Emite un evento para notificar al componente padre que se ha guardado la tarea
  } catch (error) {
    console.error("Error al actualizar la tarea:", error)
  }
};

const cancelEdit = (task) => {
  task.editing = false // Desactiva el modo de edición
}
</script>

<style scoped>
.taskslist {
  padding: 2rem;
}

ul {
  padding: 0;
}

.card {
  max-width: 30rem;
  list-style: none;
  background-color: #1b2132;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.input-card {
  display: flex;
  flex-direction: column;
}

h3 {
  font-weight: 600;
  color: black;
  background-color: #e8ff00;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.title {
  font-weight: 600;
  color: black;
  background-color: #e8ff00;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.title-input {
  font-weight: 600;
  color: black;
  background-color: #e8ff00;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.description {
  padding: 1rem;
  color: white;
  background-color: #1b2132;
}

.description-input {
  padding: 1rem;
  color: white;
  background-color: #1b2132;
}

.crud {
  display: flex;
  justify-content: center;
  padding: 1rem 0 1rem 0;
}

.date {
  font-weight: 600;
  text-align: end;
  padding: 1rem;
  color: #ff9b7b;
}

.btn-edit{
  display: flex;
  justify-content: space-around;
  
}
.save,
.cancel {
  border-radius: 0.5rem;
  padding: 0.3rem;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  width: 5rem;
}

.save {
  color: green;
}

.cancel {
  color: red;
}

.delete,
.edit,
.done {
  border-radius: 0.5rem;
  padding: 0.3rem;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
}

.delete:hover,
.edit:hover,
.done:hover,
.save:hover,
.cancel:hover {
  background-color: #b6b1b1;
}
</style>
