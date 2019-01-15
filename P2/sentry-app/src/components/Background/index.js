import React from 'react'
import './style.css'

class Background extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Background Background--loaded"></div>
    )
  }
}

export default Background