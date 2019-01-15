import React from 'react'
import './style.css'
import util from '../../util'

const ImpactItem = props => {
  const {des, date, ip, width} = props.impactor
  const dateText = util.parseDateString(date)
  const prob = (util.convertExpToDec(ip) * 100).toFixed(3)
  console.log(ip, prob)
  return (
    <div className="impact-item">
      <h4>Object Name: {des}</h4>
      <p>Diameter: {width}</p>
      <p>Impact Date: {dateText}</p>
      <p>Impact Probability: {prob}%</p>
    </div>
  )
}

export default ImpactItem