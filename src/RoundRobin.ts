/**
 * Generate round-robin rounds from players.
 *
 * @param players The players.
 */
export const RoundRobin = <T>(players: T[]): [T, T][][] => {
  const n = players.length
  const n1 = n % 2 === 0 ? n : n + 1
  const count = n1 - 1
  const matchPerRound = n1 / 2
  const rounds: [T, T][][] = []

  for (let roundIndex = 0; roundIndex < count; roundIndex++) {
    const matches: [T, T][] = []

    for (let matchIndex = 0; matchIndex < matchPerRound; matchIndex++) {
      if (matchIndex === 0 && n % 2 === 1) continue

      const opponents = [
        (roundIndex - matchIndex - 1 + n1) % (n1 - 1),
        matchIndex === 0 ? n1 - 1 : (roundIndex + matchIndex) % (n1 - 1),
      ]

      matches.push([players[opponents[0]], players[opponents[1]]])
    }

    if (!matches.length) continue

    rounds.push(matches)
  }

  return rounds
}
