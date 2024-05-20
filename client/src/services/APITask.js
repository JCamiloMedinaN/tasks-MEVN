import { getAllTasks } from './GetAllTasks'
import { getTaskById } from './GetTask'
import { createTask } from './PostTask'
import { updateTask } from './UpdateTask';
import { deleteTask } from './DeleteTask'
import { searchTasks} from './SearchTask'

class APITask {
  constructor() {}

  async getAllTasks() {
    return getAllTasks();
  }

  async searchTasks(query){
    return searchTasks(query)
  }

  async getTaskById(id) {
    return getTaskById(id);
  }

  async createTask(task) {
    return createTask(task);
  }

  async updateTask(id, task) {
    return updateTask(id, task);
  }

  async deleteTask(id) {
    return deleteTask(id);
  }
}

export default APITask;
