import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import Home from './pages/Home'
import Tutorial from './pages/Tutorial'
import { enter, exit } from './util/pageTransitionUtils'

import "./index.css";
const store = configureStore();

render(
  <Provider store={store}>

    <Router>
      <Route render={({ location }) => {
        const { pathname, key } = location;

        return (
          <TransitionGroup component={null}>
            <Transition
              key={key}
              appear={true}
              onEnter={(node, appears) => enter(pathname, node, appears)}
              onExit={exit}
              timeout={{ enter: 750, exit: 500 }}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/tutorial" component={Tutorial} />
              </Switch>
            </Transition>
          </TransitionGroup>
        )
      }} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
