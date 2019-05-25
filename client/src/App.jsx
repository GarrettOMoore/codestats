import React, {Component} from 'react';
import './App.css';
import Solved from './Components/Solved'
import axios from 'axios';
import logo from './Images/codewars_logo.png'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      user: {},
      showData: false
    }
    // this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e){
    this.setState({
        name: e.target.value
    })
  }

  handleClick = (e) => {
    axios.post('/user', {
      name: this.state.name
    }).then((res)=>{
      this.setState({
        user: res.data.user,
        showData: true
      })
    }).catch((err)=>{
      console.log(err)
    })
  }
  
  render() {
  return (
    <Router>
    <div className="App">
      <img className='logo' src={logo}/>
      {/* <Link className='nav-text'to='/solved'>Solved</Link> {' | '} */}
      <h1>track your codewars ranking</h1>
      <Link className='nav-text' to='/'>Refresh</Link> <br/>
      <section className='search-box'>
        <h3>Enter your Codewars username: </h3>
        <input onChange={this.handleChange}name='name' type='text'/>
        <Link className='nav-text'to='/solved'><button onClick={this.handleClick}>Submit!</button></Link>
      </section>
    </div>
    <Route exact path='/solved' render={()=><Solved userData={this.state.user} name={this.state.name} />} />
    </Router>
  )
 }
}

export default App;
