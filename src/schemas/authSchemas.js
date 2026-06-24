import { z } from 'zod'

export const loginSchema = z.object({
  mobile: z.string().min(8, 'Enter a valid mobile'),
  password: z.string().min(4, 'Password required')
})

export const registerSchema = z.object({
  name: z.string().min(2),
  mobile: z.string().min(8),
  password: z.string().min(6),
  vehicleId: z.string().optional()
})
