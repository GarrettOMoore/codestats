import React, {Component} from 'react'
import axios from 'axios'
import moment from 'moment'

class Solved extends Component {
    constructor(props){
        super(props)
        this.state={
            data: [],
            user: {}
        }
    }
    componentDidMount() {
        // GET SOLVED KATA
        axios.get('/data').then((res) => {
          console.log(res.data.data)
          this.setState({
            data: res.data.data
          })
        }).catch((err)=> console.log(err))
        // GET USER INFO
        axios.get('/user').then((res) => {
            console.log(res.data.user)
            this.setState({
              user: res.data.user
            })
          }).catch((err)=> console.log(err))
      }
    
    render() {
        console.log(this.state.data.length)
        let allResults = Array.from(this.state.data)
        console.log(allResults)
        let results = allResults.map((result, key)=>{
            let date = result.completedAt.substr(0,10)
            // date = date.replace(/[^a-zA-Z0-9 ]/g, "");
            date = moment(date, "YYYYMMDD").fromNow();
            return(
                <>
                <p className='solved-results'>{result.name}</p>
                <p className='solved-results'>{date}</p>
                </>
            )
        })
        return(
            <>
            <p className='user-info'>Name: {this.state.user.name}</p>
            <p className='user-info'>Clan: {this.state.user.clan}</p>
            <p className='user-info'>Honor: {this.state.user.honor}</p>
            {/* <p>Completed Kata: {this.state.user.codeChallenges.totalCompleted}</p> */}
            <p className='user-info'>Leaderboard Position: {this.state.user.leaderboardPosition}</p>
            <hr/>
            <h1>My Solved Katas: </h1>
            {results}
            </>
        )
    }
}

export default Solved