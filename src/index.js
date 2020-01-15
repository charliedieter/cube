import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import Home from './pages/Home'
import Tutorial from './pages/Tutorial'

import './index.css'
const store = configureStore()

render(
  <Provider store={store}>
    <Router>
      <Route
        render={({ location }) => {
          const { pathname, key } = location

          return (
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              {/* <Route
                path="/tutorial/:step?"
                component={({ match: { params } }) => <Tutorial {...params} />}
              /> */}
            </Switch>
          )
        }}
      />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
