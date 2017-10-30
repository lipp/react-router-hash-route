import React from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

export const jump = (node, offset) => {
  window.scrollTo(0, node.getBoundingClientRect().top - offset + window.scrollY)
}

class HashRoute extends React.PureComponent {
  state = {
    active: false
  }

  componentDidMount () {
    const {location, offset, scroll, id} = this.props
    if (location.hash === `#${id}`) {
      requestAnimationFrame(() => {
        this.setState({active: true})
        scroll(document.getElementById(id), offset)
      })
    }
  }

  componentWillReceiveProps ({location, history}) {
    console.log('asd', this.props)
    const {location: prevLocation, offset, scroll, id} = this.props
    if (location === prevLocation) {
      return
    }
    if (location.hash === `#${id}`) {
      requestAnimationFrame(() => {
        this.setState({active: true})
        scroll(document.getElementById(id), offset)
      })
    } else if (this.state.active) {
      this.setState({active: false})
    }
  }

  render () {
    const {id, component, render} = this.props
    const {active} = this.state
    if (component) {
      return <component id={this.props.id} active={active}/>
    }
    if (render) {
      return render({id, active})
    }
    console.warn('HashRoute has neither "render" nor "component" prop')
    return null
  }
}

HashRoute.defaultProps = {
  offset: 0,
  scroll: jump
}

HashRoute.propTypes = {
  id: PropTypes.string.isRequired,
  scroll: PropTypes.func,
  render: PropTypes.func,
  component: PropTypes.element,
  offset: PropTypes.number
}

export default withRouter(HashRoute)
