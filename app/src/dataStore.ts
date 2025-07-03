export interface BaseEntity {
  id: string
}

function load<T>(key: string): T[] {
  const json = localStorage.getItem(key)
  return json ? (JSON.parse(json) as T[]) : []
}

function save<T>(key: string, items: T[]) {
  localStorage.setItem(key, JSON.stringify(items))
}

export function createStore<T extends BaseEntity>(key: string) {
  return {
    getAll(): T[] {
      return load<T>(key)
    },
    get(id: string): T | undefined {
      return load<T>(key).find((item) => (item as any).id === id)
    },
    create(item: T) {
      const items = load<T>(key)
      items.push(item)
      save(key, items)
    },
    update(item: T) {
      const items = load<T>(key).map((it) => ((it as any).id === item.id ? item : it))
      save(key, items)
    },
    remove(id: string) {
      const items = load<T>(key).filter((it) => (it as any).id !== id)
      save(key, items)
    },
  }
}


import type { Player, Team, Game } from './types'

export const playerStore = createStore<Player>('players')
export const teamStore = createStore<Team>('teams')
export const gameStore = createStore<Game>('games')
