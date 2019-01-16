import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import ImpactList from './components/ImpactList'
import Footer from './components/Footer'
import About from './components/About'
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

  componentDidMount() {
    this.getSummary()
  }

  render() {
    const impactors = this.state.impactors
    const source = this.state.source
    const selectedObject = this.state.selectedObject
    return (
      <div className="App">
        <Background />
        <Header source={source} />
        <div className="container">
          <Nav />
          <main>
            <Route path="/" exact render={() => <ImpactList requestInfo={this.requestInfo} impactors={impactors}/> } />
            <Route path="/list" render={() => <ImpactList requestInfo={this.requestInfo} impactors={impactors}/> } />
            <Route path="/about" component={About} />
            {selectedObject && <AsteroidData id={selectedObject}/>}
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
