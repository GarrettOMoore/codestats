import React, {Component} from 'react'
import axios from 'axios'
import moment from 'moment'

class Solved extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        console.log(this.props.name)
        axios.post('/data', {
            name: this.props.name
          }).then((res)=>{
            console.log(res.data.data)
            this.setState({
              data: res.data.data,
            })
          }).catch((err)=>{
            console.log(err)
          })
    }
    
    render() {
        let allResults = this.state.data
        let results;
        if (this.state.data) {
          results = allResults.map((result, key)=>{
            let date = result.completedAt.substr(0,10)
            date = date.replace(/[^a-zA-Z0-9 ]/g, "");
            date = moment(date, "YYYYMMDD").fromNow();
            return(
                <>
                <h2 className='solved-results'>{result.name}</h2>
                <p className='solved-results'>You did this {date}.</p>
                </>
            )
        })
    } else {
        results = (
            <p>No Kata found</p>
        )
    }
        return(
            <>
            <p className='user-info'>Name: {this.props.userData.name}</p>
            <p className='user-info'>Clan: {this.props.userData.clan}</p>
            <p className='user-info'>Honor: {this.props.userData.honor}</p>
            {/* <p className='user-info'>Rank: {this.props.userData.ranks}</p> */}
            <p className='user-info'>Leaderboard Position: {this.props.userData.leaderboardPosition}</p> 
            <h1>My Solved Katas: </h1>
            {results}
            </>
        )
    }
}
export default Solved