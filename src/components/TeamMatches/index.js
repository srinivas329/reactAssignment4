// Write your code here
import {Component} from 'react'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamBanner: '', latestMatch: {}, recentMatch: []}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatchDetails = data.recent_matches

    const updatedLatestMatch = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const updatedRecentMatch = recentMatchDetails.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

    console.log(updatedRecentMatch)

    this.setState({
      teamBanner: teamBannerUrl,
      latestMatch: updatedLatestMatch,
      recentMatch: updatedRecentMatch,
    })
  }

  render() {
    const {teamBanner, latestMatch, recentMatch} = this.state
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      id,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatch
    return (
      <div className="details-bg">
        <div>
          <img src={teamBanner} alt="banner" className="banner" />
          <p className="latest-name">Latest Match</p>
          <div className="latest-match-card">
            <div className="date-venue">
              <p className="team-name">{competingTeam}</p>
              <p className="date">{date}</p>
              <p>{venue}</p>
              <p>{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              className="latest-logo"
              alt={`latest match ${competingTeam}`}
            />
            <div className="innings-card">
              <p className="bold-text">First Innings</p>
              <p>{firstInnings}</p>
              <p className="bold-text">Second Innings</p>
              <p>{secondInnings}</p>
              <p className="bold-text">Man of the match</p>
              <p>{manOfTheMatch}</p>
              <p className="bold-text">Umpires</p>
              <p>{umpires}</p>
            </div>
          </div>
          <ul className="card-ul">
            {recentMatch.map(each => (
              <MatchCard recentDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
