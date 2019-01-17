import React from 'react'
import './style.css'
import util from '../../util'

const ImpactItem = props => {
  const {des, date, ip} = props.impactor
  const dateText = util.parseDateString(date)
  const prob = (util.convertExpToDec(ip) * 100).toFixed(3)

  const handleClick = () => {
    props.requestInfo(des)
  }

  return (
    <div className="impact-item" onClick={handleClick}>
      <h3 className="impact-item__heading"><span className="impact-item__em">Object Name:</span> {des}</h3>
      <p className="impact-item__info"><span className="impact-item__em">Impact Date:</span> {dateText}</p>
      <p className="impact-item__info"><span className="impact-item__em">Impact Probability:</span> {prob}%</p>
    </div>
  )
}

export default ImpactItem