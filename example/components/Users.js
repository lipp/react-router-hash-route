import React from 'react'
import {Link} from 'react-router-dom'
import HashRoute from 'react-router-hash-route'
import User from './User'

const users = ['James', 'Mila', 'Elli', 'Frank', 'Jim', 'Isaac', 'Nicole']

const List = () => (
  <div>
    {
      users.map(name => (
        <HashRoute
          id={name}
          key={name}
          render={({id, active}) => <User name={name} id={id} active={active} />}
          />
      ))
    }
  </div>
)

const Links = () => (
  <nav>
    {
      users.map(name => (
        <div key={name} >
          <Link to={`/#${name}`} >{name}</Link>
        </div>
      ))
    }
    <style jsx>{`
      nav {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 10px solid #ff00c5;
      }
      nav div {
        margin: 1em;
      }
    `}</style>
  </nav>
)

export default () => (
  <div>
    <Links />
    <List />
  </div>
)
