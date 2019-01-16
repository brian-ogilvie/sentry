import React from 'react'
import './style.css'
import About from '../About'
import Wikipedia from '../../util/Wikipedia'

class AboutContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      wikiInfo: null,
    }
  }

  getSentryInfo = async () => {
    const wikiInfo = await Wikipedia.getSentryInfo()
    this.setState({wikiInfo})
  }

  componentDidMount() {
    this.getSentryInfo()
  }

  render() {
    const wikiInfo = this.state.wikiInfo
    return (
      <div>
        {wikiInfo ? <About {...wikiInfo}/> : <p>Loading...</p> }
      </div>
    )
  }
}

export default AboutContainer