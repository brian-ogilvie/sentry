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

class App extends Component {
  constructor() {
    super()
    this.state = {
      impactors: [],
      source: '',
    }
  }

  getSummary = async () => {
    const data = await Sentry.getSummary()
    const impactors = data.data
    const source = data.signature.source
    this.setState({impactors, source})
  }

  componentDidMount() {
    this.getSummary()
  }

  render() {
    const impactors = this.state.impactors
    const source = this.state.source
    return (
      <div className="App">
        <Header source={source} />
        <div className="container">
          <Nav />
          <main>
            <Route path="/" exact render={() => <ImpactList impactors={impactors}/> } />
            <Route path="/list" render={() => <ImpactList impactors={impactors}/> } />
            <Route path="/asteroid-info" component={AsteroidData} />
            <Route path="/about" component={About} />
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
