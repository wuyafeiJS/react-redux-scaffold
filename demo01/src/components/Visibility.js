import FilterLink from '../containers/routes/VisibilityFilter'
import React, { Component } from 'react'

class Visibility extends Component {
 
  render () {

    return (
      <p>
        show:
        {" "}
        <FilterLink filter="SHOW_ALL">all</FilterLink>
        {","}
        <FilterLink filter="SHOW_ACTIVE">active</FilterLink>
        {","}
        <FilterLink filter="SHOW_COMPLETED">completed</FilterLink>
    </p>
    )
  }
}

export default Visibility