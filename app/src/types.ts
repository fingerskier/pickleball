export interface Player {
  id: string
  name: string
}

export interface Team {
  id: string
  name: string
  players: string[]
}

export interface Game {
  id: string
  teamA: string
  teamB: string
  scoreA: number
  scoreB: number
}
