import React from 'react'
import {HashRouter} from 'react-router-dom'
import Users from '../components/Users'

export default class App extends React.Component {
  state = {}

  componentDidMount () {
    this.setState({isMounted: true})
  }

  render () {
    if (!this.state.isMounted) {
      return null
    }
    return (
      <HashRouter>
        <Users />
      </HashRouter>
    )
  }
}
