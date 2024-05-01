<template>
  <div class="taskslist">
    <ul>
      <li class="card" v-for="task in tasks" :key="task._id">
        <div class="input-card">
          <h3>{{ task.title }}</h3>

          <p class="description">{{ task.description }}</p>

          <p class="date">{{ formatDate(task.date) }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { format } from "date-fns";


defineProps({
  tasks: {type:Array},
});

const formatDate = (date) => {
  return format(new Date(date), "dd/MM/yyyy");
};
</script>

<style scoped></style>
