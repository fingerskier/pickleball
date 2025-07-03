import { StateMachine, State, StateButton } from 'ygdrassil'
import Players from './components/Players'
import Teams from './components/Teams'
import Games from './components/Games'

export default function App() {
  return (
    <StateMachine initial="home" name="app">
      <nav>
        <StateButton to="home">Home</StateButton>
        <StateButton to="players">Players</StateButton>
        <StateButton to="teams">Teams</StateButton>
        <StateButton to="games">Games</StateButton>
      </nav>

      <State name="home">
        <>
          <h1>Welcome to Pickleball Tracker</h1>
          <p>Select a section.</p>
        </>
      </State>
      <State name="players">
        <Players />
      </State>
      <State name="teams">
        <Teams />
      </State>
      <State name="games">
        <Games />
      </State>
    </StateMachine>
  )
}
