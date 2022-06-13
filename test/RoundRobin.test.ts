import each from 'jest-each'
import { RoundRobin } from '../src/index'

describe('Round Robin', () => {
  each(
    [
      [[1, 2, 3, 4, 5, 6, 7, 8], 7],
      [['a', 'b', 'c', 'd', 'e', 'f', 'g'], 7],
      [[1, 2, 3, 4, 5, 6], 5],
      [['a', 'b', 'c', 'd', 'e'], 5],
      [[1, 2, 3, 4], 3],
      [['a', 'b', 'c'], 3],
      [[1, 2], 1],
      [['a'], 0],
    ].map(([participants, expected]) => [(participants as number[]).length, expected, participants])
  ).test('should make round-robin rounds from %s participants with result %s rounds', (_, expected, participants) => {
    expect(RoundRobin(participants).length).toBe(expected)
  })

  each([
    [
      [3, 2, 1, 4, 5, 6],
      [3, 6],
      [6, 3],
    ],
    [
      ['d', 'c', 'b', 'a'],
      ['d', 'a'],
      ['a', 'd'],
    ],
  ]).test('should make first match of %s to return %s or %s', (participants, firstExpected, optionalExpected) => {
    const [home, away] = RoundRobin(participants)[0][0]

    expect(home === firstExpected[0] || home === optionalExpected[0]).toBeTruthy()
    expect(away === firstExpected[1] || away === optionalExpected[1]).toBeTruthy()
  })
})
