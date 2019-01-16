import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import ImpactList from './components/ImpactList'
import Footer from './components/Footer'
import AboutContainer from './components/AboutContainer'
import AsteroidData from './components/AsteroidData'
import Sentry from './util/Sentry'
import Background from './components/Background'

class App extends Component {
  constructor() {
    super()
    this.state = {
      impactors: [],
      source: '',
      selectedObject: '',
    }
  }

  getSummary = async () => {
    const data = await Sentry.getData()
    const impactors = data.data
    const source = data.signature.source
    this.setState({impactors, source})
  }

  requestInfo = selectedObject => {
    this.setState({selectedObject})
  }

  closeAsteroidData = () => {
    this.setState({selectedObject: ''})
  }

  componentDidMount() {
    this.getSummary()
  }

  render() {
    const impactors = this.state.impactors
    const source = this.state.source
    const selectedObject = this.state.selectedObject
    const containerClassName = 'container' + (selectedObject && ' container--hidden')
    return (
      <div className="App">
        <Background />
        <Nav />
        <div className={containerClassName}>
          <Header source={source} />
          <main>
            <Route path="/" exact render={() => <ImpactList requestInfo={this.requestInfo} impactors={impactors}/> } />
            <Route path="/list" render={() => <ImpactList requestInfo={this.requestInfo} impactors={impactors}/> } />
            <Route path="/about" component={AboutContainer} />
          </main>
          <Footer />
        </div>
        {selectedObject && <AsteroidData id={selectedObject} requestClose={this.closeAsteroidData}/>}
      </div>
    );
  }
}

export default App;
