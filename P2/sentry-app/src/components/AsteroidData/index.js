import React from 'react'
import './style.css'
import Sentry from '../../util/Sentry'

class AsteroidData extends React.Component {
  constructor() {
    super()
    this.state = {
      asteroid: null,
    }
  }

  getData = async () => {
    if (this.props.id) {
      const id = this.props.id
      const asteroid = await Sentry.getData(id)
      this.setState({asteroid})
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const asteroid = this.state.asteroid
    return (
      <div className="asteroid-data">
        {asteroid ? 
        (
          <h1>{asteroid.summary.des}</h1>
        )
        : (
          <h1>Loading</h1>
        )}
      </div>
    )
  }
}

export default AsteroidData