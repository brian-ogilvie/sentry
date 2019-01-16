import React from 'react'
import './style.css'
import ImpactItem from '../ImpactItem'

const ImpactList = props => {
  const renderImpactItems = () => {
    return props.impactors.map((impactor,i) => {
      return <ImpactItem key={i} impactor={impactor} requestInfo={props.requestInfo} />
    })
  }

  return (
    <div className="impact-list">
      {props.impactors ? (
        <div>
          <h2 className="impact-list__heading">Potential Impacts</h2>
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