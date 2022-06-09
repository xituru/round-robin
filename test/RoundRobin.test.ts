import { RoundRobin } from '../src/index'

test('Greet Carl', () => {
  expect(RoundRobin('Carl')).toBe('Hello Carl!')
})
