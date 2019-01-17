import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  toggleMenu = () => {
    this.setState(prev => {
      return {visible: !prev.visible}
    })
  }

  render() {
    const visible = this.state.visible
    const visibleClassName = visible ? 'nav-visible' : ''
    return (
      <div className="main-nav">
        <h2 className="main-nav__header" onClick={this.toggleMenu}>Menu</h2>
        <nav className={visibleClassName}>
          <ul className="main-nav__list" onClick={this.toggleMenu}>
            <li className="main-nav__item"><Link className="main-nav__link" to="/list">Impact List</Link></li>
            <li className="main-nav__item"><Link className="main-nav__link" to="/about">About Sentry</Link></li>
            <li className="main-nav__item main-nav__item--last"><Link className="main-nav__link" to="/loading">Loading</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav