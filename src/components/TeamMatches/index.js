// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    // FIX12: The method to get data should be called to get data from API
    this.getTeamMatchDetails()
  }

  getFormatedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()

    const formatedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatches: this.getFormatedData(fetchedData.latest_match_details),
      recentMatches: fetchedData.recent_matches.map(eachItem =>
        this.getFormatedData(eachItem),
      ),
    }
    // FIX13: The state value of isLoading should be set to false to display the response
    this.setState({
      teamMatchDetails: formatedData,
      isLoading: false,
    })
  }

  renderMatchCard = () => {
    const {teamMatchDetails} = this.state
    const {recentMatches} = teamMatchDetails

    return (
      <ul className="match-card">
        {recentMatches.map(eachItem => (
          <MatchCard matchDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderTeamMatch = () => {
    const {teamMatchDetails} = this.state
    const {teamBannerUrl, latestMatches} = teamMatchDetails

    return (
      <div className="team-match-container">
        <img
          className="team-bannar-style"
          src={teamBannerUrl}
          alt="team banner"
        />
        <div className="latest-match-card">
          <p className="sub-heading">Latest Matches</p>
          <LatestMatch latestMatchDetails={latestMatches} />
        </div>

        {this.renderMatchCard()}
      </div>
    )
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const dynamicClassName = `match-details-container ${this.getRouteClassName()}`

    return (
      <div className={dynamicClassName}>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatch()
        )}
      </div>
    )
  }
}

export default TeamMatches
