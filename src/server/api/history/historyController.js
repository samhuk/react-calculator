const dummyHistory = [
  { l: 123, r: 678, op: '*' },
  { l: 1, r: 1, op: '+' },
]

export const getHistory = (req, res) => {
  return res.send(dummyHistory)
}
