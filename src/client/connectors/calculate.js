import { map } from 'rxjs/operators'
import { post } from './core'

export const calculate = calculationString => post(
  'calculate',
  JSON.stringify({ calculationString }),
).pipe(map(res => res.value, err => err))
