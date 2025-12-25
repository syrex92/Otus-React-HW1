import { Link } from 'react-router'
import './App.css'
import CatFactsComponent from '../features/CatFacts/CatFactsComponent.js'
import UsersCounter from '../features/UsersList/usersCounter.js'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Welcome to the App</h1>
        <UsersCounter />
      </div>      
      <div className="links">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
      <CatFactsComponent />
    </div>
  )
}

export default App
