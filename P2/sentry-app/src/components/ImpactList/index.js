import React from 'react'
import './style.css'
import ImpactItem from '../ImpactItem'

const ImpactList = props => {
  const renderImpactItems = () => {
    return props.impactors.map((impactor,i) => {
      return <ImpactItem key={i} impactor={impactor} />
    })
  }

  return (
    <div className="impact-list">
      {props.impactors ? (
        <div>
          <h1 className="impact-list__heading">Potential Impacts</h1>
          <div className="impact-list__items">
            {renderImpactItems()}
          </div>
        </div>
      )
      : (
        <p>Loading</p>
      )}
    </div>
  )
}

export default ImpactList