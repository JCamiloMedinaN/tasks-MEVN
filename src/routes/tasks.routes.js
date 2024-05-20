import { Router } from "express"
import { getTasks, createTask, getTask, deleteTask, updatetTask, searchTasks } from '../controllers/tasks.controller.js'
import { validateSchema } from "../middlewares/validator.middleware.js"
import { createtaskValidations } from "../validations/tasks.validations.js"

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/search', searchTasks)
router.get('/tasks/:id', getTask)
router.post('/tasks', validateSchema(createtaskValidations), createTask)
router.delete('/tasks/:id', deleteTask)
router.put('/tasks/:id', updatetTask)

export default router