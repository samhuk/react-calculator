import { post } from './core'

export const calculate = calculationString => post(
  'calculate',
  JSON.stringify({ calculationString }),
)
