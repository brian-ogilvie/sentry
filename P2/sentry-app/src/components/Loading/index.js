import React from 'react'
import './style.css'

const Loading = props => {
  return (
    <div className="Loading">
      <div className="loading__loader">
        <div className="loading__outer"></div>
        <div className="loading__middle"></div>
        <div className="loading__inner"></div>
      </div>
    </div>
  )
}

export default Loading