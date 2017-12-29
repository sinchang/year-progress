import yearProgress from '../src'

test('main', () => {
  expect(typeof yearProgress).toBe('function')
})

test('use custom date', () => {
  const percent = yearProgress(new Date('2016-12-30')).percent
  expect(percent).toEqual(99)
})

test('use now', () => {
  const percent = yearProgress().percent
  expect(percent).toBeGreaterThan(0)
})

test('throw error', () => {
  expect(() => {
    yearProgress('2017-10-3')
  }).toThrow()
})
