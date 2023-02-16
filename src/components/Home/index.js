// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {homeList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const finalData = data.teams
    const updatedData = finalData.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updatedData)

    this.setState({homeList: updatedData, isLoading: false})
  }

  render() {
    const {homeList, isLoading} = this.state
    return (
      <Link to="/">
        <div className="bg-container">
          <div className="heading-tab">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo"
            />
            <h1 className="heading">Ipl Dashboard</h1>
          </div>
          <ul className="ul-list">
            {isLoading ? (
              <Loader type="TailSpin" color="blue" width={30} height={30} />
            ) : (
              homeList.map(each => <TeamCard teamCards={each} key={each.id} />)
            )}
          </ul>
        </div>
      </Link>
    )
  }
}

export default Home
