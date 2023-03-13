// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  const statusClass = matchStatus === 'Won' ? 'green-style' : 'red-style'

  return (
    <li className="list-match-container">
      <img
        className="match-card-image"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-heading">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`status ${statusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
