
import {Link, Route, Routes} from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import './App.css'
import { UserList } from './components/UserList'
import { UserProfile } from './components/UserProfile'

const DataContext = createContext()

function App() {

  

  const [users, setUsers] = useState([])

  useEffect(() => {
      fetch("http://localhost:4000/users")
      .then(data => data.json())
      .then(data => setUsers(data))
      console.log("runs")
  }, [])

  /* const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "ben",
      lastName: "ten"
    },
    {
      id: 2,
      firstName: "mark",
      lastName: "Zuck"
    }
  ]) */

  console.log(users)

  return (
    <>
      <header>
        <h2>Menu</h2>
        <ul>
            <li>
                <Link to="/users">User List</Link>
            </li>
            <li>
                <Link to="/newuser">Create New User</Link>
            </li>
        </ul>
      </header>
      <DataContext.Provider value={{ users, setUsers }} >
        <Routes>
            <Route path='/users' element={ <UserList /> } />
            {/* <Route path='/newcontact' element={ <NewContactForm /> } /> */}
            <Route path='/user/:id' element={ <UserProfile /> } />
        </Routes>
      </DataContext.Provider>
    </>
  )
}

export {App, DataContext}
