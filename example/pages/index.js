import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
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
      <Router>
        <div>
          <Switch>
            <Route path='/' component={Users} />
            <Redirect to='/' />
          </Switch>
          <style jsx global>{`
            body {
              margin: 0;
            }
          `}</style>
        </div>
      </Router>
    )
  }
}
