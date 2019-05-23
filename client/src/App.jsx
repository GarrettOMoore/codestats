import React, {Component} from 'react';
import './App.css';
import Solved from './Components/Solved'
// import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      user: {},
    }
    // this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e){
    this.setState({
        name: e.target.value
    })
  }

  // handleClick = (e) => {
  //   e.persist()
  //   e.preventDefault()
  //   console.log("IN CLICK FUNC")
  //   console.log(e.target.value)
  //   let userName = e.target.value
  //   this.setState({
  //     name: e.target.name.value
  //   })
  //   // let userName = e.target.name.value
  // }
  
  render() {
  return (
    <Router>
    <div className="App">
      <h1>Codewars Stats</h1>
      <Link className='nav-text'to='/solved'>My Solved Katas</Link> {' | '}
      <Link className='nav-text' to='/'>Home</Link> <br/>
      <section className='search-box'>
        <h3>Enter your Codewars username: </h3>
        <input onChange={this.handleChange}name='name' type='text'/>
        <Link className='nav-text'to='/solved'><button onClick={this.handleClick}>Submit!</button></Link>
        
      </section>
    </div>
    <Route exact path='/solved' render={()=><Solved/>} userName={this.state.name} />
    </Router>
  )
 }
}

export default App;
