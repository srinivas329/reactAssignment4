// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCards} = props
  const {teamImageUrl, name, id} = teamCards
  return (
    <Link to={`/team-match/:${id}`}>
      <li className="list-item">
        <img src={teamImageUrl} className="team-logo" alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
