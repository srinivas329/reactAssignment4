// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = recentDetails

  const color = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="list-item1">
      <img
        src={competingTeamLogo}
        className="team-logo1"
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-name1">{competingTeam}</p>
      <p>{result}</p>
      <p className={color}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
