import { withProps } from 'recompose'
import { calculate } from 'client/connectors/calculate'
import Calculator from './calculator'

export default withProps({ calculate })(Calculator)
