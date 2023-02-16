import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div>
    <>
      <Switch>
        <Home exact path="/" />
        <Route path="/team-match/::id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </>
  </div>
)

export default App
