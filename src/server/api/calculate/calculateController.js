import Parser from 'expr-eval'

const parser = new Parser()

export const calculate = (req, res) => {
  const { calculationString } = req.body

  const cleanedCalculationString = calculationString.trim()

  const value = parser.evaluate(cleanedCalculationString)

  return res.send(value)
}
