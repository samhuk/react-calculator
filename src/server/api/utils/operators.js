export const operatorToFunctionMap = {
  '+': (l, r) => l + r,
  '-': (l, r) => l - r,
  '*': (l, r) => l * r,
  '/': (l, r) => l / r,
  '**': (l, r) => l ** r,
  sqrt: l => Math.sqrt(l),
}
