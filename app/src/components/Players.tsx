import { useEffect, useState } from 'react'
import { playerStore } from '../dataStore'
import type { Player } from '../types'

export default function Players() {
  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    setPlayers(playerStore.getAll())
  }, [])

  const addPlayer = () => {
    const newItem: Player = {
      id: Date.now().toString(),
      name: `Player ${players.length + 1}`,
    }
    playerStore.create(newItem)
    setPlayers(playerStore.getAll())
  }

  return (
    <div>
      <h2>Players</h2>
      <button onClick={addPlayer}>Add Player</button>
      <ul>
        {players.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}
