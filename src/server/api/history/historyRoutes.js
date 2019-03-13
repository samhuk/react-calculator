import { Router } from 'express'
import { getHistory } from './historyController'

const historyRoutes = Router()
  .get('/history', getHistory)

export default historyRoutes
