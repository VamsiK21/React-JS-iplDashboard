// FIX1: To use Switch Component, it should be imported.
import {Route, Switch} from 'react-router-dom'

import TeamMatches from './components/TeamMatches'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="app-body">
  {/* FIX2: Route should be wrapped with Switch Component from react-route-dom */}
    <Switch>
    {/* FIX3: exact keyword should be added */}
      <Route exact path="/" component={Home} />
      {/* FIX4: The Route Component should be given the prop "component" */}
      {/* FIX5: When mentioning path parameters for a route we need to use ":" before the variable like-"id"}
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
