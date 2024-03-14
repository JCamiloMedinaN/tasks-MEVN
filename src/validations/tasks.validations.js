import { z } from "zod"

export const createtaskValidations = z.object({
    title: z.string({
        required_error: 'Titulo es requerido'
    })
    .min(1, {
        message: 'La descripción debe tener al menos 1 caracter'
    }),
    description: z.string({
        required_error: 'La descripción es requerida y debe ser un string'
    })
    .min(10, {
        message: 'La descripción debe tener al menos 10 caracteres'
    }),
})