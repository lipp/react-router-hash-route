import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
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
        <div>
          <Switch>
            <Route path='/users' component={Users} />
            <Redirect to='/users' />
          </Switch>
          <style jsx global>{`
            body {
              margin: 0;
            }
          `}</style>
        </div>
      </HashRouter>
    )
  }
}
