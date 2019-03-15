import cors from 'cors'
import { json, Router } from 'express'
import calculateRoutes from './calculate/calculateRoutes'

const router = Router()
  .use(cors())
  .use(json())
  .use('/calculate', calculateRoutes)

export default router
