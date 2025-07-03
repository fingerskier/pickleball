import { useEffect, useState } from 'react'
import { gameStore } from '../dataStore'
import type { Game } from '../types'

export default function Games() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    setGames(gameStore.getAll())
  }, [])

  const addGame = () => {
    const newItem: Game = {
      id: Date.now().toString(),
      teamA: 'Team A',
      teamB: 'Team B',
      scoreA: 0,
      scoreB: 0,
    }
    gameStore.create(newItem)
    setGames(gameStore.getAll())
  }

  return (
    <div>
      <h2>Games</h2>
      <button onClick={addGame}>Add Game</button>
      <ul>
        {games.map((g) => (
          <li key={g.id}>{g.teamA} vs {g.teamB}</li>
        ))}
      </ul>
    </div>
  )
}
