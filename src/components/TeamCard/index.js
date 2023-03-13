// Write your code here
// FIX8: To use Link component, it should be imported
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    //FIX9: When clicked on TeamCard, Page should be navigated to the URL "/team-matches/${id}"
    //FIX10: "exact" and "path" props are used in Route component to match routes
    //FIX11: "to" is the prop used to give the URL for navigation to the Link Component
    <li className="item-container">
      <Link to={`/team-matches/${id}`} className="link">
        <img className="team-img" src={teamImageUrl} alt={name} />
        <p className="team-text">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
