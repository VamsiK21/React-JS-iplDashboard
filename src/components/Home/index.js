// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const iplLogo = 'https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png'

class Home extends Component {
  state = {
    totalTeams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(updatedData)

    this.setState({
      totalTeams: updatedData,
      isLoading: false,
    })
  }

  renderTeamList = () => {
    const {totalTeams} = this.state

    return (
      <ul className="team-list-container">
        {/* FIX6: The list of team cards should be rendered using Array.map() method */}
        {totalTeams.map(eachItem => (
          <TeamCard teamDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="title-container">
          <img className="ipl-logo-style" src={iplLogo} alt="ipl logo" />
          <h1 className="title-text">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          // FIX7: For the purpose of testing here testid attribute should be added with the value "loader"
          <div testid="loader">
            <Loader type="Oval" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamList()
        )}
      </div>
    )
  }
}

export default Home
