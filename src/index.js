import React from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

export const jump = (node, offset) => {
  window.scrollTo(0, node.getBoundingClientRect().top - offset + window.scrollY)
}

class HashScroll extends React.PureComponent {
  componentDidMount () {
    const {location, offset, scroll, id} = this.props
    console.log(location.hash)
    if (location.hash === `#${id}`) {
      console.log('asd')
      console.log('ref', this.node, this.node.getBoundingClientRect().top - this.props.offset, window.scrollY)
      requestAnimationFrame(() => {
      scroll(this.node, offset)
      })
    }
  }

  componentWillReceiveProps ({location}) {
    const {location: prevLocation, offset, scroll, id} = this.props
    if (location !== prevLocation && location.hash === `#${id}`) {
      scroll(this.node, offset)
    }
  }

  storeNode = node => {
    this.node = node
  }

  render () {
    return <div ref={this.storeNode} id={this.props.id}>{this.props.children}</div>
  }
}

const HashRoute = ({location, children, id, offset, scroll}) =>
  <HashScroll id={id} location={location} offset={offset} scroll={scroll} >
    {children}
  </HashScroll>

HashRoute.defaultProps = {
  offset: 0,
  scroll: jump
}

HashRoute.propTypes = {
  id: PropTypes.string.isRequired,
  scroll: PropTypes.func,
  offset: PropTypes.number
}

export default withRouter(HashRoute)
