import React from 'react'
import {Link} from 'react-router-dom'
import HashRoute from 'react-router-hash-route'
import User from './User'

const users = ['James', 'Mila', 'Elli', 'Frank', 'Jim', 'Isaac', 'Nicole']

const List = () => (
  <div>
    {
      users.map(name => (
        <HashRoute id={name.toLowerCase()} key={name} >
          <User name={name} />
        </HashRoute>
      ))
    }
  </div>
)

const Links = () => (
  <div>
    {
      users.map(name => <Link to={`/#${name.toLowerCase()}`} key={name} >{name}</Link>)
    }
  </div>
)

export default () => (
  <div>
    <Links />
    <List />
  </div>
)
