import { useEffect, useState } from 'react'
import { teamStore } from '../dataStore'
import type { Team } from '../types'

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    setTeams(teamStore.getAll())
  }, [])

  const addTeam = () => {
    const newItem: Team = {
      id: Date.now().toString(),
      name: `Team ${teams.length + 1}`,
      players: [],
    }
    teamStore.create(newItem)
    setTeams(teamStore.getAll())
  }

  return (
    <div>
      <h2>Teams</h2>
      <button onClick={addTeam}>Add Team</button>
      <ul>
        {teams.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </div>
  )
}
