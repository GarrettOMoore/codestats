import React, {Component} from 'react'
import axios from 'axios'

class Solved extends Component {
    constructor(props){
        super(props)
        this.state={
            data: {}
        }
    }
    componentDidMount() {
        axios.post('/data/solved').then((res) => {
          console.log("FRONT END POSTTT:  ")
          console.log(res)
          this.setState({
            data: res.data.data
          })
        }).catch((err)=> console.log(err))
      }
    
    render() {
        return(
            <h1>SOLVED HERE</h1>
        )
    }
}

export default Solved