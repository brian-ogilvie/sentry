import React from 'react'
import './style.css'
import Sentry from '../../util/Sentry'
import AsteroidData from '../AsteroidData'
import Loading from '../Loading'

class AsteroidDataContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      asteroid: null,
      fadingOut: false,
    }
  }

  getData = async () => {
    if (this.props.id) {
      const id = this.props.id
      const asteroid = await Sentry.getData(id)
      this.setState({asteroid})
    }
  }

  close = () => {
    if (!this.state.fadingOut) {
      this.setState({fadingOut: true})
      setTimeout(this.props.requestClose, 300)
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const asteroid = this.state.asteroid
    const fadingOut = this.state.fadingOut
    const asteroidDataClassName = 'asteroid-data' + (fadingOut ? ' fading-out' : '')
    return (
      <div className={asteroidDataClassName}>
        <div className="close-button" onClick={this.close}></div>
        { asteroid ? <AsteroidData asteroid={asteroid}/> : <Loading /> }
      </div>
    )
  }
}

export default AsteroidDataContainer