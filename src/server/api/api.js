import cors from 'cors'
import { json, Router } from 'express'
import historyRoutes from './history/historyRoutes'

const router = Router()
  .use(cors())
  .use(json())
  .use('/history', historyRoutes)

export default router
