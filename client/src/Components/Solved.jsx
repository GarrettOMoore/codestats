import React, {Component} from 'react'
import axios from 'axios'
import moment from 'moment'

class Solved extends Component {
    constructor(props){
        super(props)
    }
    // componentDidMount() {
    //     console.log("PRRROOOPSS", this.props.userData)
    //     this.setState({
    //         user: this.props.userData
    //     })
    //     // GET SOLVED KATA
    //     axios.get('/data').then((res) => {
    //       this.setState({
    //         data: res.data.data
    //       })
    //     }).catch((err)=> console.log(err))
      
    
    render() {
        // let allResults = Array.from(this.props.katas)
        // let results = allResults.map((result, key)=>{
        //     let date = result.completedAt.substr(0,10)
        //     date = date.replace(/[^a-zA-Z0-9 ]/g, "");
        //     date = moment(date, "YYYYMMDD").fromNow();
        //     return(
        //         <>
        //         <p className='solved-results'>{result.name}</p>
        //         <p className='solved-results'>{date}</p>
        //         </>
        //     )
        // })
        return(
            <>
            <p className='user-info'>Name: {this.props.userData.name}</p>
            <p className='user-info'>Clan: {this.props.userData.clan}</p>
            <p className='user-info'>Honor: {this.props.userData.honor}</p>
            {/* <p>Completed Kata: {this.state.user.codeChallenges.totalCompleted}</p> */}
            <p className='user-info'>Leaderboard Position: {this.props.userData.leaderboardPosition}</p> 
            <h1>My Solved Katas: </h1>
            {/* {results} */}
            </>
        )
    }
}
export default Solved