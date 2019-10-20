import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { STEPS } from '../../util/solution'
import './Nav.css'

function Nav({ match: { isExact } }) {
  return (
    <nav>
      <ul>
        <li></li>
        {STEPS.map(({ name }, i) => {
          const step = name.split(' ').join('-')
          return (
            <li key={name}>
              <NavLink to={`/tutorial/${step}`} activeClassName="active">
                {name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default withRouter(Nav)
