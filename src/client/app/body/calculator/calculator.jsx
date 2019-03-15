import React from 'react'
import { func } from 'prop-types'

class Calculator extends React.Component {
  static propTypes = { calculate: func.isRequired }

  state = {
    expression: '',
    isCalculating: false,
    value: null,
    showEmptyError: false,
    showFailedError: false,
  }

  clearErrors = () => {
    this.setState({ showEmptyError: false, showFailedError: false })
  }

  onExpressionChange = ({ target: { value } }) => this.setState({ expression: value })

  onCalculate = () => {
    const { calculate } = this.props
    const { expression } = this.state
    this.clearErrors()
    this.setState({ isCalculating: false })
    if (expression && expression.length > 0) {
      this.setState({ isCalculating: true })
      calculate(expression).subscribe(
        value => this.setState({ value, isCalculating: false }),
        () => this.setState({ showFailedError: true }),
      )
    } else {
      this.setState({ showEmptyError: true })
    }
  }

  render() {
    const { isCalculating, value, showEmptyError, showFailedError } = this.state
    return (
      <div className="calculatorRow">
        <div className="calculator">
          <label htmlFor="1" className="inlineLabel">Calculation Expression:</label>
          <input
            id="1"
            type="text"
            onChange={this.onExpressionChange}
            onKeyPress={e => e.key === 'Enter' && this.onCalculate()}
            placeholder="Enter Expression"
          />
          <div className="error errorMessage">{showEmptyError ? 'Please enter an expression' : ''}</div>
          <button type="submit" onClick={this.onCalculate}>
            {isCalculating ? <b>Calculating...</b> : 'Calculate' }
          </button>
          <div className="error errorMessage">
            {showFailedError ? 'Please check your syntax.' : ''}
          </div>
          <b className="value">{value}</b>
        </div>
      </div>
    )
  }
}

export default Calculator
