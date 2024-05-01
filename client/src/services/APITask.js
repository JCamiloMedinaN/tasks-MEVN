import { getAllTasks } from './GetAllTasks'
import { getTaskById } from './GetTask'
import { createTask } from './PostTask'

class APITask {
  constructor() {}

  async getAllTasks() {
    return getAllTasks();
  }

  async getTaskById(id) {
    return getTaskById(id);
  }

  async createTask(task) {
    return createTask(task);
  }

//   async updateTask(id, task) {
//     return updateTask(id, task);
//   }

//   async deleteTask(id) {
//     return deleteTask(id);
//   }
}

export default APITask;
