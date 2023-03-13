// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="left-part">
        <p className="competing-team">{competingTeam}</p>
        <p className="date-text">{date}</p>
        <p className="venue-text">{venue}</p>
        <p className="result-text">{result}</p>
      </div>
      <img
        className="competing-logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <hr className="separator" />
      <div className="right-side">
        <p className="right-text">First Innings</p>
        <p className="right-text">{firstInnings}</p>
        <p className="right-text">Second Innings</p>
        <p className="right-text">{secondInnings}</p>
        <p className="right-text">Man Of The Match</p>
        <p className="right-text">{manOfTheMatch}</p>
        <p className="right-text">Umpires</p>
        <p className="right-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
