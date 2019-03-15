import { Parser } from 'expr-eval'

const parser = new Parser()

export const calculate = (req, res) => {
  const { calculationString } = req.body

  const cleanedCalculationString = calculationString.replace(/\s/g, '')

  try {
    const value = parser.evaluate(cleanedCalculationString)
    res.send({ value })
  } catch (e) {
    res.sendStatus(400)
  }
}
