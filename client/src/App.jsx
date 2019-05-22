import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Solved from './Components/Solved'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  

  render() {
  return (
    <Router>
    <div className="App">
      <h1>CODEWARS!!!</h1>
      <Link className='nav-text'to='/solved'>My Solved Katas</Link> {' | '}
      <Link className='nav-text' to='/'>Home</Link>
      <h1>HOME</h1>
    </div>
    <Route exact path='/solved' render={()=><Solved/>} />
    </Router>
  )
 }
}

export default App;
