import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Users from '../components/Users'
import Head from 'next/head'

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
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>HashRoute - Example</title>
          </Head>
          <Switch>
            <Route path='/' component={Users} />
            <Redirect to='/' />
          </Switch>
          <style jsx global>{`
            body {
              font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
              margin: 0;
            }
          `}</style>
        </div>
      </Router>
    )
  }
}
