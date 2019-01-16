import React from 'react'
import './style.css'
import Sentry from '../../util/Sentry'
import util from '../../util'

class AsteroidData extends React.Component {
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

  parseDate = str => {
    return str.split('.')[0].split('-').join(' ')
  }

  close = () => {
    if (!this.state.fadingOut) {
      this.setState({fadingOut: true})
      setTimeout(this.props.requestClose, 300)
    }
  }

  renderTableData = () => {
    const data = this.state.asteroid.data
    return data.reverse().map((impact, i) => {
      const date = util.parseDateString(impact.date)
      const prob = (util.convertExpToDec(impact.ip) * 100).toFixed(4)
      return (
        <tr key={i}>
          <td>{date}</td>
          <td>{prob}%</td>
        </tr>
      )
    })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const asteroid = this.state.asteroid
    if (asteroid) {
      const {des, ip, mass, diameter, last_obs, first_obs} = asteroid.summary
      const diam = Number(diameter).toFixed(4)
      const prob = (Number(ip) * 100).toFixed(3)
      const fadingOut = this.state.fadingOut
      const asteroidDataClassName = 'asteroid-data' + (fadingOut ? ' fading-out' : '')
      return (
        <div className={asteroidDataClassName}>
          <div className="close-button" onClick={this.close}></div>
          <h2>Asteroid Data</h2>
          <h3>Object Name: {des}</h3>
          <div className="data__size-info">
            <div><strong>Diameter:</strong> {diam} km</div>
            <div><strong>Mass:</strong> {mass} kg</div>
            <div><strong>Max Impact Probability:</strong> {prob}%</div>
            <div><strong>First Observed:</strong> {this.parseDate(first_obs)}</div>
            <div><strong>Last Observed:</strong> {this.parseDate(last_obs)}</div>
          </div>
          <h3>All Calculated Impacts:</h3>
          <table className="impact-table">
            <tbody>
              <tr><th>Date</th><th>Probability</th></tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div className="asteroid-data">
          <div className="close-button" onClick={this.close}></div>
          <h2>Loading...</h2>
        </div>
      )
    }
  }
}

export default AsteroidData