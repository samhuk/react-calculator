import { Router } from 'express'
import { calculate } from './calculateController'

const calculateRoutes = Router()
  .post('/calculate', calculate)

export default calculateRoutes
