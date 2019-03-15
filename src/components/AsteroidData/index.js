import React from 'react'
import './style.css'
import helper from '../../util/helper'

const AsteroidData = props => {
  const renderTableData = () => {
    const data = props.asteroid.data
    return data.reverse().map((impact, i) => {
      const date = helper.parseDateString(impact.date)
      const prob = (helper.convertExpToDec(impact.ip) * 100).toFixed(4)
      return (
        <tr key={i}>
          <td>{date}</td>
          <td>{prob}%</td>
        </tr>
      )
    })
  }

  const parseDate = str => {
    return str.split('.')[0].split('-').reverse().join(' ')
  }

  const {des, ip, mass, diameter, last_obs, first_obs} = props.asteroid.summary
  const diam = Number(diameter).toFixed(4)
  const prob = (Number(ip) * 100).toFixed(3)
  return (
    <div className="asteroid-data__content">
      <h2>Asteroid Data</h2>
      <h3>Object Name: {des}</h3>
      <div className="data__size-info">
        <div><strong>Diameter:</strong> {diam} km</div>
        <div><strong>Mass:</strong> {mass} kg</div>
        <div><strong>Max Impact Probability:</strong> {prob}%</div>
        <div><strong>First Observed:</strong> {parseDate(first_obs)}</div>
        <div><strong>Last Observed:</strong> {parseDate(last_obs)}</div>
      </div>
      <h3>All Calculated Impacts:</h3>
      <table className="impact-table">
        <tbody>
          <tr><th>Date</th><th>Probability</th></tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
}

export default AsteroidData