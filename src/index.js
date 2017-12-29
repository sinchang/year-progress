const isDate = require('lodash.isdate')

export default function (date) {
  if (date) {
    if (!isDate(date)) {
      throw new Error('incorrent date')
    }
  } else {
    date = new Date()
  }

  // code from: https://github.com/nicomf1982/year-progress-bar
  const initialDate = new Date(date.getFullYear(), 0, 1)
  const percent = Math.floor((((date - initialDate) / (1000 * 60 * 60 * 24)) * 100) / 365)
  let yearBar = ''

  for (let i = 5; i <= 100; i += 6) {
    yearBar = (i < percent) ? yearBar + '▓' : yearBar + '░'
  }

  return {
    yearBar,
    percent
  }
}
