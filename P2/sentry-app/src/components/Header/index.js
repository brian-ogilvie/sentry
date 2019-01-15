import React from 'react'
import './style.css'

const Header = props => {
  const source = props.source
  return (
    <header>
      <h1 className="page-title">Potential Earth Impact Data</h1>
      <p className="header__source">Provided by {source}</p>
    </header>
  )
}

export default Header