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
          <h1 className="impact-list__heading">ImpactList</h1>
          {renderImpactItems()}
        </div>
      )
      : (
        <p>Loading</p>
      )}
    </div>
  )
}

export default ImpactList