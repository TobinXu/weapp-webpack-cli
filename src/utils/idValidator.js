function isLegitCitizenId(c) {
  if (18 !== c.length) {
    return false
  }
  if (!isLegitDate(c.slice(6, 10), c.slice(10, 12), c.slice(12, 14))) {
    return false
  }
  if (c[17] === 'x') {
    c = c.slice(0, 17) + 'X'
  }
  if (c[17] !== getValidationCode(c.slice(0, 17))) {
    return false
  }
  return true
}

function isLegitDate(year, month, day) {
  var presumedDate = new Date(Date.UTC(+year, +month - 1, +day))
  return presumedDate.getUTCDate() === +day && presumedDate.getUTCMonth() === +month - 1 && presumedDate.getFullYear() === +year
}

function getValidationCode(c) {
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  let y = 0
  c.split('').forEach((v, i) => {
    let digit = +v
    let weight = weights[i]
    y += digit * weight
    y %= 11
  })

  y = (12 - y) % 11
  if (y === 10) {
    return 'X'
  }
  return y + ''
}

module.exports = { isLegitCitizenId }
